import {existsSync} from 'fs';
import {readdir, stat} from 'fs/promises';
import {dirname, join} from 'path';

export const repoRootDir = dirname(dirname(dirname(__dirname)));
export const srcDir = join(repoRootDir, 'src');
export const testFilesDir = join(repoRootDir, 'test-files');
export const elementsDir = join(srcDir, 'elements');

export async function getElementFilePaths(): Promise<string[]> {
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
