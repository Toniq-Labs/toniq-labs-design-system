import {format as prettierFormat, Options as PrettierOptions} from 'prettier';
// ignore this import cause it's not typed. We're typing it here!
// @ts-expect-error
import * as importedRepoConfig from '../../../.prettierrc.js';

const repoConfig: PrettierOptions = importedRepoConfig as PrettierOptions;

export function formatText(text: string, filePath: string): string {
    return prettierFormat(text, {
        ...repoConfig,
        filepath: filePath,
    });
}
