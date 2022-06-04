import {fixtureCleanup} from '@open-wc/testing';

export function fixtureTest(callback: () => Promise<void>) {
    return async () => {
        await callback();
        fixtureCleanup();
    };
}
