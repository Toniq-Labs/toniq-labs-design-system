import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        /** Not ready for v3 */
        'prettier',
    ],
    // include only these
    filter: [],
};
