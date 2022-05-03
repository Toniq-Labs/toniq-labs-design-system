import {relative} from 'path';
export function parseUpdateExportsArgs() {
    const dryRun = process.argv.includes('--dry-run');
    const checkOnly = process.argv.includes('--check');

    return {
        dryRun,
        checkOnly,
    };
}

export type UpdateExportsInputs = {
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

export type UpdateExportsResult = 'success' | 'check-failed';

export type UpdateExportsConfig = {
    executor: (inputs: UpdateExportsInputs) => Promise<UpdateExportsResult>;
    scriptToRun: string;
};

export function errorIfFailure(
    config: Pick<UpdateExportsConfig, 'scriptToRun'>,
    result: UpdateExportsResult,
) {
    if (result === 'check-failed') {
        throw new Error(
            `${config.scriptToRun} needs to be updated: run 'ts-node ${relative(
                process.cwd(),
                __filename,
            )}'`,
        );
    }
}
