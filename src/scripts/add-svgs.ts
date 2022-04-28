import {readDirRecursive} from 'augment-vir/dist/node-only';
import {existsSync} from 'fs';
import {readFile, stat} from 'fs/promises';
import {basename} from 'path';
import {optimize, OptimizeOptions, PrefixIdsPlugin} from 'svgo';

const scriptName = basename(__filename);

type Dimensions = {
    width: number;
    height: number;
};

const baseSvgoOptions: OptimizeOptions = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    // I have run into issues in the past with removed view boxes
                    removeViewBox: false,
                },
            },
        },
        {
            // makes styles more clear imo
            name: 'convertStyleToAttrs',
        },
        {
            // all our SVGs will be inlined, and xmlns is not required for inline SVGs
            name: 'removeXMLNS',
        },
        {
            // prevent clashing-ids
            name: 'prefixIds',
        },
        {
            // round viewBox numbers
            name: 'cleanupListOfValues',
        },
        {
            // only vectors
            // this may break some images, try out first
            name: 'removeRasterImages',
        },
        {
            name: 'sortAttrs',
        },
        {
            name: 'removeOffCanvasPaths',
        },
        {
            name: 'removeStyleElement',
        },
        {
            name: 'removeScriptElement',
        },
        {
            name: 'reusePaths',
        },
    ],
};

function createSvgoOptions(iconName: string): OptimizeOptions {
    const pluginPrefixOptions: NonNullable<PrefixIdsPlugin['params']> = {
        prefix: iconName,
    };

    return {...baseSvgoOptions};
}

function getIconName(svgPath: string, size: Dimensions): string {
    const svgFileName = basename(svgPath);
    const svgName = svgFileName
        .replace(/\.svg$/, '')
        .replace(/-fixed/, '')
        .replace(/-(\w)/g, (fullMatch, letterGroup) => {
            if (typeof letterGroup !== 'string') {
                throw new Error(`Could not match \\w for "${fullMatch}" from "${svgFileName}"`);
            }
            return letterGroup.toUpperCase();
        });

    const dominantSize = Math.max(size.width, size.height);

    const iconName = `${svgName}${dominantSize}Icon`;

    return iconName;
}

function getSvgDimensions(svgContents: string): Dimensions {}

async function convertAndInsertIcon(svgPath: string): Promise<void> {
    const svgContents: string = (await readFile(svgPath)).toString();

    const svgDimensions = getSvgDimensions(svgContents);

    const iconName: string = getIconName(svgPath, svgDimensions);

    const svgoOptions = createSvgoOptions(iconName);

    const optimizedSvgContents = optimize(svgContents, svgoOptions);
}

async function main(): Promise<void> {
    const cliArgs = process.argv.slice(2);
    console.log({cliArgs});

    if (!cliArgs.length) {
        throw new Error(
            `script requires arguments: a space separated list of files or directories.`,
        );
    }

    const svgFiles: string[] = (
        await Promise.all(
            cliArgs.map(async (filePath): Promise<string | string[]> => {
                if (!existsSync(filePath)) {
                    throw new Error(`Could not anything at path: "${filePath}"`);
                }
                const fileStats = await stat(filePath);
                if (fileStats.isDirectory()) {
                    return (await readDirRecursive(filePath)).filter((filePath) =>
                        filePath.toLowerCase().endsWith('.svg'),
                    );
                } else {
                    if (filePath.toLowerCase().endsWith('.svg')) {
                        return filePath;
                    } else {
                        throw new Error(`Encountered non .svg file: "${filePath}"`);
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
            await convertAndInsertIcon(svgPath);
        }),
    );
}

main().catch((error) => {
    console.error(`${scriptName} error:`);
    console.error(error);
    process.exit(1);
});
