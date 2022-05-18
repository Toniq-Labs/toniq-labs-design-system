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

const elementsDir = join(srcDir, 'elements');
const elementsIndexPath = join(elementsDir, 'index.ts');

async function getElementFilePaths(): Promise<string[]> {
    const allElementsDirChildrenWithStats = await Promise.all(
        (
            await readdir(elementsDir)
        ).map(async (childName) => {
            const childFullPath = join(elementsDir, childName);
            const stats = await stat(childFullPath);

            return {
                stats,
                childName,
            };
        }),
    );
    const allElementDirectoryNames = allElementsDirChildrenWithStats
        .filter((child) => {
            return child.stats.isDirectory();
        })
        .map((child) => child.childName);
    const allElementFilePaths = allElementDirectoryNames.map((elementDir) => {
        const fileName = `${elementDir}.element.ts`;
        return join(elementsDir, elementDir, fileName);
    });
    return allElementFilePaths;
}

async function verifyElementFilePaths(filePaths: string[]): Promise<void> {
    await Promise.all(
        filePaths.map(async (filePath) => {
            if (!existsSync(filePath)) {
                throw new Error(`Element file "${filePath}" does not exist.`);
            }
            if (!(await stat(filePath)).isFile()) {
                throw new Error(`Element file "${filePath}" is not a file.`);
            }
        }),
    );
}

function generateElementExports(filePaths: string[]): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(elementsDir, filePath).replace(/\.ts?$/, '');

        return `export * from './${toPosixPath(relativePath)}';`;
    });
    return exportLines.join('\n');
}

export const updateElementExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const elementFilePaths = await getElementFilePaths();
        await verifyElementFilePaths(elementFilePaths);

        await writeOrCheckFromArgs(
            elementsIndexPath,
            generateElementExports(elementFilePaths),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(elementsIndexPath, updateElementExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
