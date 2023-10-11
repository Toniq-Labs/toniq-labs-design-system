import {itCases} from '@augment-vir/browser-testing';
import {isSocialUrlsObject, socialUrlsShape} from './social-urls';

describe(isSocialUrlsObject.name, () => {
    itCases(isSocialUrlsObject, [
        {
            it: 'works with missing keys',
            input: {},
            expect: true,
        },
        {
            it: 'works with existing keys',
            input: socialUrlsShape.defaultValue,
            expect: true,
        },
        {
            it: 'fails an object with an extra key',
            input: {
                ...socialUrlsShape.defaultValue,
                extraKey: 'woops',
            },
            expect: false,
        },
    ]);
});
