import {assert} from '@open-wc/testing';

/** This is the same as asserts.instanceof but returns proper type information as well. */
export function assertInstanceOf<T>(
    element: unknown,
    constructor: new (...args: any[]) => T,
    message?: string,
): asserts element is T {
    assert.instanceOf(element, constructor, message);
}

export function assertDefinedAndNotNull<T>(
    input: T,
    message?: string,
): asserts input is NonNullable<T> {
    assert.isDefined(input, message);
    assert.isNotNull(input, message);
}
