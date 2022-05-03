import {dirname, join} from 'path';

export const repoRootDir = dirname(dirname(dirname(__dirname)));
export const srcDir = join(repoRootDir, 'src');