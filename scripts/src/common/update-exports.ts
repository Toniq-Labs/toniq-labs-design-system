import {existsSync} from 'fs';
import {readFile, writeFile} from 'fs/promises';
import {relative} from 'path';
import {repoRootDir} from './file-paths';
import {formatCode} from './format';

export class NotUpToDateError extends Error {
    public override readonly name = 'NotUpToDateError';
}

export function parseUpdateExportsArgs() {
    const dryRun = process.argv.includes('--dry-run');
    const checkOnly = process.argv.includes('--check');

    return {
        dryRun,
        checkOnly,
    };
}

export type UpdateExportsArgs = {
    /**
     * Indicates that no file should be written, and logs the code to the console. This option takes
     * precedence over checkOnly.
     */
    dryRun?: boolean | undefined;
    /**
     * Checks if the current file contents matches the contents that would've been written. Use in
     * test pipelines.
     */
    checkOnly?: boolean | undefined;
};

export type UpdateExportsConfig = {
    executor: (inputs: UpdateExportsArgs) => Promise<void>;
};

export async function writeOrCheckFromArgs(
    fileToWriteTo: string,
    codeToWrite: string,
    args: UpdateExportsArgs,
    scriptName: string,
): Promise<void> {
    const formattedCode = formatCode(codeToWrite, fileToWriteTo);
    const relativeWriteToFile = relative(repoRootDir, fileToWriteTo);

    if (args.dryRun) {
        console.info(
            `Would've written the following to "${relativeWriteToFile}":\n"${formattedCode}"`,
        );
    } else if (args.checkOnly) {
        const currentOutputContents = (await readFile(fileToWriteTo)).toString();
        if (formattedCode === currentOutputContents) {
            console.info(`${relativeWriteToFile} is up to date.`);
        } else {
            throw new NotUpToDateError(
                `\x1b[31m\x1b[1m${relativeWriteToFile} needs to be updated: run 'npx ts-node ${relative(
                    repoRootDir,
                    scriptName,
                )}'\x1b[0m`,
            );
        }
    } else {
        console.info(`Writing to "${fileToWriteTo}"`);
        await writeFile(fileToWriteTo, formattedCode);
    }
}

export async function updateExportsMain(
    fileCheckPath: string,
    updateExportsConfig: UpdateExportsConfig,
): Promise<void> {
    if (!existsSync(fileCheckPath)) {
        throw new Error(`"${fileCheckPath}" file does not exist.`);
    }

    await updateExportsConfig.executor(parseUpdateExportsArgs());
}
