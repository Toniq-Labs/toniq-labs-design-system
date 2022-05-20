import {readdir} from 'fs/promises';
import {join} from 'path';
import {generateExportsFromFilePaths, stylesDir} from './common/file-paths';
import {
    formatAndWriteOrCheckFromArgs,
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
} from './common/update-exports';

const elementsIndexPath = join(stylesDir, 'index.ts');

export const updateStylesExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const stylesFilePaths = (await readdir(stylesDir))
            .filter((styleFile) => !styleFile.includes('index.ts') && styleFile.endsWith('.ts'))
            .map((styleFileName) => join(stylesDir, styleFileName));

        await formatAndWriteOrCheckFromArgs(
            elementsIndexPath,
            generateExportsFromFilePaths(stylesFilePaths, stylesDir),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(elementsIndexPath, updateStylesExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
