import {Overwrite} from 'augment-vir';
import {
    defineFunctionalElement,
    EventsInitMap,
    FunctionalElementInit,
    PropertyInitMapBase,
} from 'element-vir';

export const tagPrefix = `toniq-`;
export type ToniqTagName = `${typeof tagPrefix}${string}`;

export function defineToniqElement<
    EventsInitGeneric extends EventsInitMap = {},
    PropertyInitGeneric extends PropertyInitMapBase = {},
>(
    functionalElementInit: Overwrite<
        FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric>,
        {tagName: ToniqTagName}
    >,
) {
    if (!functionalElementInit.tagName.startsWith(tagPrefix)) {
        throw new Error(
            `Element tag name must start with "${tagPrefix}" (got "${functionalElementInit.tagName}")`,
        );
    }

    if (functionalElementInit.tagName === tagPrefix) {
        throw new Error(
            `A tag name must exist after the prefix for ${defineToniqElement.name}: "${functionalElementInit.tagName}"`,
        );
    }
    return defineFunctionalElement<EventsInitGeneric, PropertyInitGeneric>(functionalElementInit);
}
