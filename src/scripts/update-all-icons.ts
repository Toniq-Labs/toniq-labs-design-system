import {getObjectTypedKeys, kebabCaseToCamelCase} from 'augment-vir/dist';
import {readDirRecursive, runShellCommand} from 'augment-vir/dist/node-only';
import {existsSync} from 'fs';
import {writeFile} from 'fs/promises';
import {basename, dirname, join, relative} from 'path';

const srcDir = dirname(__dirname);
const svgsDir = join(srcDir, 'icons', 'svgs');
const allIconsFilePath = join(srcDir, 'icons', 'all-icons.ts');

function generateIconNameFromFilePath(filePath: string): string {
    return `${kebabCaseToCamelCase(basename(filePath.replace(/\.icon\.ts$/, '')), {
        capitalizeFirstLetter: true,
    })}Icon`;
}

function generateTsImport(iconFilePath: string, iconName: string): string {
    const relativePath = relative(dirname(allIconsFilePath), iconFilePath).replace(/\.ts$/, '');
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

    return `${imports.join('\n')}
    
        export const allIcons = {
            ${categories.join(',\n')}
        } as const;`;
}

async function main() {
    if (!existsSync(allIconsFilePath)) {
        throw new Error(`"${allIconsFilePath}" file does not exist.`);
    }

    const dryRun = process.argv.includes('--dry-run');
    const allIconPaths: string[] = (await readDirRecursive(svgsDir))
        .filter((relativePath) => relativePath.endsWith('.icon.ts'))
        .map((relativePath) => join(svgsDir, relativePath));

    const tsCode = generateTsCode(allIconPaths);

    if (dryRun) {
        console.info(`Would've written the following to "${allIconsFilePath}": "${tsCode}"`);
    } else {
        console.info(`Writing to "${allIconsFilePath}"`);
        await writeFile(allIconsFilePath, tsCode);
        await runShellCommand('npm run format', {rejectOnError: true, hookUpToConsole: true});
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
