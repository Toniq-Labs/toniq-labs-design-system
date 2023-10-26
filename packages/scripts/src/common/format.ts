import {format as prettierFormat, Options as PrettierOptions} from 'prettier';
// ignore this import cause it's not typed. We're typing it here!
// @ts-expect-error
import * as importedRepoConfig from '../../../../.prettierrc.js';

const repoConfig: PrettierOptions = importedRepoConfig as PrettierOptions;

export async function formatCode(text: string, filePath: string): Promise<string> {
    return await prettierFormat(text, {
        ...repoConfig,
        filepath: filePath,
    });
}
