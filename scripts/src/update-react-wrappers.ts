import {kebabCaseToCamelCase} from '@augment-vir/common';
import {toPosixPath} from '@augment-vir/node-js';
import {basename, join, relative} from 'path';
import {elementsDir, getElementFilePaths} from './common/file-paths';
import {
    formatAndWriteOrCheckFromArgs,
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
} from './common/update-exports';

const reactComponentsFilePath = join(elementsDir, 'react-components.tsx');

function nativeName(elementName: string): string {
    return `Native${elementName}`;
}

function generateReactWrappers(elementFilePaths: string[]): string {
    const elementNames = elementFilePaths.map((elementFilePath) => {
        const baseFileName = basename(elementFilePath).replace(/\.element\.ts$/, '');
        const elementName = kebabCaseToCamelCase(baseFileName, {capitalizeFirstLetter: true});

        return elementName;
    });
    const importWrapperLine = `import {wrapInReactComponent} from './wrap-native-element';`;

    const importLines = elementFilePaths.map((elementFilePath, index) => {
        const relativePath = relative(elementsDir, elementFilePath).replace(/\.ts?$/, '');
        const elementName = elementNames[index];
        if (!elementName) {
            console.error({elementNames});
            throw new Error(`Could not find element name at index ${index}`);
        }

        return `import {${elementName} as ${nativeName(elementName)}} from './${toPosixPath(
            relativePath,
        )}';`;
    });

    const exportLines = elementNames.map((elementName) => {
        return `export const ${elementName} = wrapInReactComponent(${nativeName(elementName)});`;
    });

    const fileContents: string = [
        ...importLines,
        importWrapperLine,
        '',
        ...exportLines,
    ].join('\n');
    return fileContents;
}

export const updateReactWrappers: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const elementFilePaths = await getElementFilePaths();

        await formatAndWriteOrCheckFromArgs(
            reactComponentsFilePath,
            generateReactWrappers(elementFilePaths),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(reactComponentsFilePath, updateReactWrappers).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
