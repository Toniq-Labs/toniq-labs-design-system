/*
    This script will automatically populate the file at "iconIndexPath" (defined below) with imports
    for, exports from, and a big object containing all the icon files located in "svgsDir" defined
    below.
*/
import {getObjectTypedKeys, kebabCaseToCamelCase} from 'augment-vir/dist/cjs';
import {readDirRecursive, toPosixPath} from 'augment-vir/dist/cjs/node-only';
import {basename, dirname, join, relative} from 'path';
import {srcDir} from './common/file-paths';
import {
    formatAndWriteOrCheckFromArgs,
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
} from './common/update-exports';

const svgsDir = join(srcDir, 'icons', 'svgs');
const iconIndexPath = join(srcDir, 'icons', 'index.ts');

function generateIconNameFromFilePath(filePath: string): string {
    return `${kebabCaseToCamelCase(basename(filePath.replace(/\.icon\.ts$/, '')), {
        capitalizeFirstLetter: true,
    })}Icon`;
}

function generateTsImport(iconFilePath: string, iconName: string): string {
    const relativePath = relative(dirname(iconIndexPath), iconFilePath).replace(/\.ts$/, '');
    return `import {${iconName}} from './${toPosixPath(relativePath)}';`;
}

function generateIconImportsAndExports(iconPaths: string[]): string {
    type IconInfo = {
        iconName: string;
        importString: string;
        category: string;
    };
    const iconInfos: IconInfo[] = iconPaths.map((iconPath): IconInfo => {
        const iconName = generateIconNameFromFilePath(iconPath);
        const svgCategory = basename(dirname(iconPath));

        return {
            iconName: iconName,
            importString: generateTsImport(iconPath, iconName),
            category: svgCategory,
        };
    });

    const organizedIcons = iconInfos.reduce((accum, currentInfo) => {
        let currentCategory = accum[currentInfo.category];
        if (!currentCategory) {
            currentCategory = [];
            accum[currentInfo.category] = currentCategory;
        }
        currentCategory.push(currentInfo);
        return accum;
    }, {} as Record<string, IconInfo[]>);

    const {imports, categories} = getObjectTypedKeys(organizedIcons)
        .sort()
        .reduce(
            (accum, categoryName) => {
                const categoryIconInfos = organizedIcons[categoryName];

                if (!categoryIconInfos?.length) {
                    return accum;
                }

                const allCategoryIconNames = categoryIconInfos
                    .map((iconInfo) => {
                        accum.imports.push(iconInfo.importString);
                        return iconInfo.iconName;
                    })
                    .sort();

                const categoryCode = `'${categoryName}': [
                ${allCategoryIconNames.join(',\n')}
                ]`;

                accum.categories.push(categoryCode);

                return accum;
            },
            {
                imports: [] as string[],
                categories: [] as string[],
            },
        );

    const exports = imports.map((importLine) => {
        return importLine.replace(/^import .+ from '(.+)';$/, "export * from '$1';");
    });

    return `${imports.join('\n')}
        ${exports.join('\n')}
        export * from './toniq-svg';
    
        export const allIconsByCategory = {
            ${categories.join(',\n')}
        } as const;`;
}

export const updateIconExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const allIconPaths: string[] = (await readDirRecursive(svgsDir))
            .filter((relativePath) => relativePath.endsWith('.icon.ts'))
            .map((relativePath) => join(svgsDir, relativePath));

        await formatAndWriteOrCheckFromArgs(
            iconIndexPath,
            generateIconImportsAndExports(allIconPaths),
            inputs,
            __filename,
        );
    },
};

if (require.main === module) {
    updateExportsMain(iconIndexPath, updateIconExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
