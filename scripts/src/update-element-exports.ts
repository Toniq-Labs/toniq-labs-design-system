import {toPosixPath} from 'augment-vir/dist/cjs/node-only';
import {join, relative} from 'path';
import {elementsDir, getElementFilePaths} from './common/file-paths';
import {
    formatAndWriteOrCheckFromArgs,
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
} from './common/update-exports';

const elementsIndexPath = join(elementsDir, 'index.ts');

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

        await formatAndWriteOrCheckFromArgs(
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
