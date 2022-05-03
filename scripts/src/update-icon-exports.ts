/*
    This script will automatically populate the file at "iconIndexPath" (defined below) with imports
    for, exports from, and a big object containing all the icon files located in "svgsDir" defined
    below.
*/
import {getObjectTypedKeys, kebabCaseToCamelCase} from 'augment-vir/dist';
import {readDirRecursive} from 'augment-vir/dist/node-only';
import {existsSync} from 'fs';
import {readFile, writeFile} from 'fs/promises';
import {basename, dirname, join, relative} from 'path';
import {srcDir} from './common/file-paths';
import {formatText} from './common/format';

const svgsDir = join(srcDir, 'icons', 'svgs');
const iconIndexPath = join(srcDir, 'icons', 'index.ts');

function generateIconNameFromFilePath(filePath: string): string {
    return `${kebabCaseToCamelCase(basename(filePath.replace(/\.icon\.ts$/, '')), {
        capitalizeFirstLetter: true,
    })}Icon`;
}

function generateTsImport(iconFilePath: string, iconName: string): string {
    const relativePath = relative(dirname(iconIndexPath), iconFilePath).replace(/\.ts$/, '');
    return `import {${iconName}} from './${relativePath}';`;
}

function generateTsCode(iconPaths: string[]): string {
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
        export * from './toniq-svg-colors';
    
        export const allIconsByCategory = {
            ${categories.join(',\n')}
        } as const;`;
}

function parseArgs() {
    const dryRun = process.argv.includes('--dry-run');
    const checkOnly = process.argv.includes('--check');

    return {
        dryRun,
        checkOnly,
    };
}

async function main() {
    if (!existsSync(iconIndexPath)) {
        throw new Error(`"${iconIndexPath}" file does not exist.`);
    }

    const {dryRun, checkOnly} = parseArgs();

    const allIconPaths: string[] = (await readDirRecursive(svgsDir))
        .filter((relativePath) => relativePath.endsWith('.icon.ts'))
        .map((relativePath) => join(svgsDir, relativePath));

    const tsCode = formatText(generateTsCode(allIconPaths), iconIndexPath);

    if (dryRun) {
        console.info(`Would've written the following to "${iconIndexPath}": "${tsCode}"`);
    } else if (checkOnly) {
        const currentOutputContents = (await readFile(iconIndexPath)).toString();
        if (tsCode === currentOutputContents) {
            console.info(`${iconIndexPath} is up to date.`);
        } else {
            console.error(`${iconIndexPath} needs to be updated.`);
            process.exit(1);
        }
    } else {
        console.info(`Writing to "${iconIndexPath}"`);
        await writeFile(iconIndexPath, tsCode);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
