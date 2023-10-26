import {toPosixPath} from '@augment-vir/node-js';
import {existsSync} from 'fs';
import {readdir, stat} from 'fs/promises';
import {join, relative, resolve} from 'path';

export const monoRepoRootDir = resolve(__dirname, join('..', '..', '..', '..'));
const packagesDir = join(monoRepoRootDir, 'packages');
const designSystemPackageDir = join(packagesDir, 'design-system');
export const designSystemSrcDir = join(designSystemPackageDir, 'src');
export const elementsDir = join(designSystemSrcDir, 'elements');
export const stylesDir = join(designSystemSrcDir, 'styles');

const gitHubWorkflowsDir = join(monoRepoRootDir, '.github', 'workflows');
export const gitHubWorkflowFilePaths = {
    githubPagesDeploy: join(gitHubWorkflowsDir, 'deploy-gh-pages.yml'),
    taggedRelease: join(gitHubWorkflowsDir, 'tagged-release.yml'),
    tests: join(gitHubWorkflowsDir, 'tests.yml'),
};

export const netlifyConfigPath = join(monoRepoRootDir, 'netlify.toml');

export function generateExportsFromFilePaths(filePaths: string[], relativeDir: string): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(relativeDir, filePath).replace(/\.ts?$/, '');
        const posixPath = toPosixPath(relativePath);
        const exportPath = posixPath.startsWith('.') ? posixPath : `./${posixPath}`;

        return `export * from '${exportPath}';`;
    });

    return exportLines.join('\n');
}

export async function getElementFilePaths(): Promise<string[]> {
    const allElementsDirChildrenWithStats = await Promise.all(
        (await readdir(elementsDir)).map(async (childName) => {
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
    const allElementFilePaths = (
        await Promise.all(
            allElementDirectoryNames.map(async (elementDirName) => {
                const elementDir = join(elementsDir, elementDirName);
                const elementDirChildren = await readdir(elementDir);

                const elementFileNames = elementDirChildren.filter((child) =>
                    child.endsWith('.element.ts'),
                );
                return elementFileNames.map((childFileName) => join(elementDir, childFileName));
            }),
        )
    ).flat();
    await verifyElementFilePaths(allElementFilePaths);
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
