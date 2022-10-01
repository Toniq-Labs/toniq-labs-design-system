import {Overwrite} from 'augment-vir';
import {defineElement, EventsInitMap, PropertyInitMapBase} from 'element-vir';
import {DeclarativeElementInit} from 'element-vir/dist/declarative-element/declarative-element-init';

export const tagPrefix = `toniq-`;
export type ToniqTagName = `${typeof tagPrefix}${string}`;

export function defineToniqElement<InputsGeneric extends PropertyInitMapBase>() {
    function innerDefine<
        StateInit extends PropertyInitMapBase,
        EventsInitGeneric extends EventsInitMap = {},
        HostClassKeys extends string = '',
        CssVarKeys extends string = '',
    >(
        elementInit: Overwrite<
            DeclarativeElementInit<
                InputsGeneric,
                StateInit,
                EventsInitGeneric,
                HostClassKeys,
                CssVarKeys
            >,
            {tagName: ToniqTagName}
        >,
    ) {
        if (!elementInit.tagName.startsWith(tagPrefix)) {
            throw new Error(
                `Element tag name must start with "${tagPrefix}" (got "${elementInit.tagName}")`,
            );
        }

        if (elementInit.tagName === tagPrefix) {
            throw new Error(
                `A tag name must exist after the prefix for ${defineToniqElement.name}: "${elementInit.tagName}"`,
            );
        }
        return defineElement<InputsGeneric>()<
            StateInit,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >(elementInit);
    }

    return innerDefine;
}
