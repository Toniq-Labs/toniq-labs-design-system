import {readdir, stat} from 'fs/promises';
import {join} from 'path';
import {generateExportsFromFilePaths, stylesDir} from './common/file-paths';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    formatAndWriteOrCheckFromArgs,
    updateExportsMain,
} from './common/update-exports';

const elementsIndexPath = join(stylesDir, 'index.ts');

export const updateStylesExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const stylesPaths = (await readdir(stylesDir))
            .filter(
                (styleFile) =>
                    !styleFile.includes('index.ts') &&
                    styleFile.endsWith('.ts') &&
                    !styleFile.endsWith('.book.ts') &&
                    !styleFile.endsWith('.test.ts'),
            )
            .map((styleFileName) => join(stylesDir, styleFileName));
        const isFile = await Promise.all(
            stylesPaths.map(async (filePath) => (await stat(filePath)).isFile()),
        );
        const stylesFilePaths = stylesPaths.filter((path, index) => isFile[index]);

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
