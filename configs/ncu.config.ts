import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        // node is now on v20 and we want to keep the v18 types
        '@types/node',
    ],
    // include only these
    filter: [],
};
