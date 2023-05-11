import {isTruthy, joinUrlParts} from '@augment-vir/common';

const potentialBasePath = '/toniq-labs-design-system';

export function createElementBookUrl(...urlParts: ReadonlyArray<string>) {
    const hasBasePath = globalThis.location.pathname.startsWith(potentialBasePath);

    const allParts = [
        hasBasePath ? potentialBasePath : '',
        ...urlParts,
    ].filter(isTruthy);

    return joinUrlParts(...allParts);
}
