import {join} from 'path';
import {elementsDir, generateExportsFromFilePaths, getElementFilePaths} from './common/file-paths';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    formatAndWriteOrCheckFromArgs,
    updateExportsMain,
} from './common/update-exports';

const elementsIndexPath = join(elementsDir, 'index.ts');

export const updateElementExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const elementFilePaths = await getElementFilePaths();

        await formatAndWriteOrCheckFromArgs(
            elementsIndexPath,
            `export * from './define-toniq-element';` +
                generateExportsFromFilePaths(elementFilePaths, elementsDir),
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
