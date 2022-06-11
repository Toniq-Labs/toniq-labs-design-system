import {
    capitalizeFirstLetter,
    collapseWhiteSpace,
    kebabCaseToCamelCase,
    RequiredAndNotNullBy,
    safeMatch,
} from 'augment-vir';
import {readDirRecursive, runShellCommand} from 'augment-vir/dist/cjs/node-only';
import {existsSync} from 'fs';
import {readFile, stat, writeFile} from 'fs/promises';
import {basename, join, relative} from 'path';
import {optimize, OptimizeOptions, PrefixIdsPlugin} from 'svgo';
import {srcDir} from './common/file-paths';

const scriptName = basename(__filename);
const svgsDir = join(srcDir, 'icons', 'svgs');

const svgoFloatPrecisionParams = {floatPrecision: 2};
const baseSvgoOptions: RequiredAndNotNullBy<OptimizeOptions, 'plugins'> = {
    plugins: [
        {
            name: 'removeDoctype',
        },
        {
            name: 'removeXMLProcInst',
        },
        {
            name: 'removeComments',
        },
        {
            name: 'removeMetadata',
        },
        {
            name: 'removeEditorsNSData',
        },
        {
            name: 'cleanupAttrs',
        },
        {
            name: 'mergeStyles',
        },
        {
            name: 'inlineStyles',
        },
        {
            name: 'minifyStyles',
        },
        {
            name: 'convertStyleToAttrs',
        },
        {
            name: 'cleanupIDs',
        },
        {
            name: 'removeUselessDefs',
        },
        {
            name: 'cleanupNumericValues',
            params: svgoFloatPrecisionParams,
        },
        {
            name: 'cleanupListOfValues',
            params: svgoFloatPrecisionParams,
        },
        {
            name: 'convertColors',
        },
        {
            name: 'removeUnknownsAndDefaults',
        },
        {
            name: 'removeNonInheritableGroupAttrs',
        },
        {
            name: 'removeUselessStrokeAndFill',
        },
        {
            name: 'cleanupEnableBackground',
        },
        {
            name: 'removeHiddenElems',
        },
        {
            name: 'removeEmptyText',
        },
        {
            name: 'convertShapeToPath',
        },
        {
            name: 'moveElemsAttrsToGroup',
        },
        {
            name: 'moveGroupAttrsToElems',
        },
        {
            name: 'collapseGroups',
        },
        {
            name: 'convertPathData',
            params: svgoFloatPrecisionParams,
        },
        {
            name: 'convertEllipseToCircle',
        },
        {
            name: 'convertTransform',
            params: svgoFloatPrecisionParams,
        },
        {
            name: 'removeEmptyAttrs',
        },
        {
            name: 'removeEmptyContainers',
        },
        {
            name: 'mergePaths',
        },
        {
            name: 'removeUnusedNS',
        },
        {
            name: 'sortAttrs',
        },
        {
            name: 'sortDefsChildren',
        },
        {
            name: 'removeTitle',
        },
        {
            name: 'removeDesc',
        },
        {
            name: 'removeStyleElement',
        },
        {
            name: 'removeScriptElement',
        },
    ],
};

function createSvgoOptions(iconName: IconFileName): OptimizeOptions {
    // prevent clashing-ids
    const pluginPrefixOptions: PrefixIdsPlugin = {
        name: 'prefixIds',
        params: {
            prefix: iconName,
        },
    };

    return {
        ...baseSvgoOptions,
        plugins: [
            ...baseSvgoOptions.plugins,
            pluginPrefixOptions,
        ],
    };
}

type IconFileName = `${string}-${number}`;
type IconName = `${string}${number}Icon`;

function getIconFileName(svgPath: string, size: number): IconFileName {
    const svgFileName = basename(svgPath);
    const svgName = svgFileName
        .replace(/\.svg$/, '')
        .replace(/-fixed/, '')
        .replace(/-\d+/, '');

    const iconName: IconFileName = `${svgName}-${size}`;

    return iconName;
}

function getIconName(iconFileName: IconFileName, size: number): IconName {
    const withoutSizeSuffix = iconFileName.replace(/\d+$/, '');

    return `${kebabCaseToCamelCase(withoutSizeSuffix, {
        capitalizeFirstLetter: true,
    })}${size}Icon`;
}

function getDominantSvgDimensions(svgContents: string): number {
    const noWhiteSpace = collapseWhiteSpace(svgContents.replace(/\n/g, ''));
    const [
        svgTagMatch,
    ] = safeMatch(noWhiteSpace, /<svg[^>]+?>/);
    if (!svgTagMatch) {
        throw new Error(`Could not extract svg tag from "${noWhiteSpace}"`);
    }

    function extractDimension(svgTag: string, dimension: 'height' | 'width'): number {
        const [
            ,
            matchedDimension,
        ] = safeMatch(svgTag, new RegExp(`${dimension}="([^"]+)"`));
        if (!matchedDimension) {
            throw new Error(`Could not extract "${dimension}" from "${svgTagMatch}"`);
        }
        const dimensionNumber = Number(matchedDimension);

        if (isNaN(dimensionNumber)) {
            throw new Error(
                `Could not extract "${dimension}" because matched dimension "${matchedDimension}" is not a number.`,
            );
        }

        return dimensionNumber;
    }

    const width = extractDimension(svgTagMatch, 'width');
    const height = extractDimension(svgTagMatch, 'height');

    return Math.max(width, height);
}

function createTsSvgCode(iconName: string, optimizedSvg: string): string {
    const capitalizedIconName = capitalizeFirstLetter(iconName);

    const hasStroke: boolean = !!safeMatch(optimizedSvg, /fill="none" stroke="#000"/).length;

    const insertedColorUsage = optimizedSvg
        .replace(/fill="none" stroke="#000"/g, '')
        .replace(/<svg/, hasStroke ? '<svg fill="none" stroke="${colorUsage.stroke}"' : '<svg');

    return `
    import {html, ToniqSvg} from '../../toniq-svg';
    import {colorUsage} from '../../toniq-svg-colors';
    
    export const ${capitalizedIconName} = new ToniqSvg('${iconName}', html\n\`${insertedColorUsage}\n\`);
`;
}

function getTsIconPath(iconFileName: IconFileName, size: number): string {
    const thirdParty = iconFileName.startsWith('brand');
    const svgDir = thirdParty ? 'third-party-brands' : `core-${size}`;
    return join(svgsDir, svgDir, `${iconFileName}.icon.ts`);
}

async function convertAndInsertIcon(svgPath: string, dryRun: boolean): Promise<void> {
    const svgContents: string = (await readFile(svgPath)).toString();

    const dominantSvgDimension: number = getDominantSvgDimensions(svgContents);

    const iconFileName: IconFileName = getIconFileName(svgPath, dominantSvgDimension);

    const svgoOptions = createSvgoOptions(iconFileName);

    const optimizedSvgResults = optimize(svgContents, svgoOptions);

    if (optimizedSvgResults.error || optimizedSvgResults.modernError) {
        throw optimizedSvgResults.error || optimizedSvgResults.modernError;
    }

    const optimizedSvgContents = optimizedSvgResults.data;

    const iconName = getIconName(iconFileName, dominantSvgDimension);

    const tsIconCode = createTsSvgCode(iconName, optimizedSvgContents);

    const writePath = getTsIconPath(iconFileName, dominantSvgDimension);

    const startMessage = dryRun ? "Would've written" : 'Writing';
    console.info(`${startMessage} "${iconName}" to "${relative(process.cwd(), writePath)}"`);

    if (!dryRun) {
        await writeFile(writePath, tsIconCode);
    }
}

const dryRunTrigger = '--dry-run';
async function main(): Promise<void> {
    const rawArgs = process.argv.slice(2);
    const cliArgs = rawArgs.filter((arg) => arg !== dryRunTrigger);
    const dryRun = rawArgs.includes(dryRunTrigger);
    console.info({cliArgs});

    if (!cliArgs.length) {
        throw new Error(
            `script requires arguments: a space separated list of files or directories.`,
        );
    }

    const svgFiles: string[] = (
        await Promise.all(
            cliArgs.map(async (fileOrDirPath): Promise<string | string[]> => {
                if (!existsSync(fileOrDirPath)) {
                    throw new Error(`Could not anything at path: "${fileOrDirPath}"`);
                }
                const fileStats = await stat(fileOrDirPath);
                if (fileStats.isDirectory()) {
                    return (await readDirRecursive(fileOrDirPath))
                        .filter((filePath) => filePath.toLowerCase().endsWith('.svg'))
                        .map((fileName) => join(fileOrDirPath, fileName));
                } else {
                    if (fileOrDirPath.toLowerCase().endsWith('.svg')) {
                        return fileOrDirPath;
                    } else {
                        throw new Error(`Encountered non .svg file: "${fileOrDirPath}"`);
                    }
                }
            }),
        )
    ).flat();

    if (!svgFiles.length) {
        throw new Error(`Received no SVG files to read.`);
    }

    console.info(`Found "${svgFiles.length}" SVG files.`);

    await Promise.all(
        svgFiles.map(async (svgPath) => {
            await convertAndInsertIcon(svgPath, dryRun);
        }),
    );

    if (!dryRun) {
        await runShellCommand('npm run format', {rejectOnError: true, hookUpToConsole: true});
    }
}

main().catch((error) => {
    console.error(`${scriptName} error:`);
    console.error(error);
    process.exit(1);
});
