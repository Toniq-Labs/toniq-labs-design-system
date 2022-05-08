import {toPosixPath} from 'augment-vir/dist/cjs/node-only';
import {existsSync} from 'fs';
import {readdir, stat} from 'fs/promises';
import {join, relative} from 'path';
import {srcDir} from './common/file-paths';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckFromArgs,
} from './common/update-exports';

const componentsDir = join(srcDir, 'components');
const componentIndexPath = join(componentsDir, 'index.ts');

async function getComponentFilePaths(): Promise<string[]> {
    const allComponentDirChildrenWithStats = await Promise.all(
        (
            await readdir(componentsDir)
        ).map(async (childName) => {
            const childFullPath = join(componentsDir, childName);
            const stats = await stat(childFullPath);

            return {
                stats,
                childName,
            };
        }),
    );
    const allComponentDirectoryNames = allComponentDirChildrenWithStats
        .filter((child) => {
            return child.stats.isDirectory();
        })
        .map((child) => child.childName);
    const allComponentFilePaths = allComponentDirectoryNames.map((componentDir) => {
        const fileName = `${componentDir}.component.ts`;
        return join(componentsDir, componentDir, fileName);
    });
    return allComponentFilePaths;
}

async function verifyComponentFilePaths(filePaths: string[]): Promise<void> {
    await Promise.all(
        filePaths.map(async (filePath) => {
            if (!existsSync(filePath)) {
                throw new Error(`Component file "${filePath}" does not exist.`);
            }
            if (!(await stat(filePath)).isFile()) {
                throw new Error(`Component file "${filePath}" is not a file.`);
            }
        }),
    );
}

function generateComponentExports(filePaths: string[]): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(componentsDir, filePath).replace(/\.ts?$/, '');

        return `export * from './${toPosixPath(relativePath)}';`;
    });
    return exportLines.join('\n');
}

export const updateComponentExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const componentFilePaths = await getComponentFilePaths();
        await verifyComponentFilePaths(componentFilePaths);

        await writeOrCheckFromArgs(
            componentIndexPath,
            generateComponentExports(componentFilePaths),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(componentIndexPath, updateComponentExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
