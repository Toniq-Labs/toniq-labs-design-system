import {fixtureCleanup} from '@open-wc/testing';
import {isPromiseLike} from 'augment-vir';

export function createFixtureTest(callback: () => Promise<void>): () => Promise<void> {
    return async () => {
        return await withFixtureCleanup(callback);
    };
}

export function withFixtureCleanup<T>(callback: () => T): T;
export function withFixtureCleanup<T>(callback: () => Promise<T>): Promise<T>;
export function withFixtureCleanup<T>(callback: () => Promise<T> | T): T | Promise<T> {
    const result = callback();
    if (isPromiseLike(result)) {
        return new Promise<T>(async (resolve, reject) => {
            try {
                const awaitedResult = await result;
                fixtureCleanup();
                resolve(awaitedResult);
            } catch (error) {
                reject(error);
            }
        });
    } else {
        fixtureCleanup();
        return result;
    }
}
