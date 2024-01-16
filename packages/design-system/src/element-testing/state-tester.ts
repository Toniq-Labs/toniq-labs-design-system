import {randomString} from '@augment-vir/common';
import {
    CustomElementTagName,
    defineElementNoInputs,
    PropertyInitMapBase,
    RenderCallback,
    VerifiedElementNoInputsInit,
} from 'element-vir';

export function createStateTester<StateGeneric extends PropertyInitMapBase>(
    stateInitStatic: StateGeneric,
    callback: RenderCallback<CustomElementTagName, {}, StateGeneric, {}, any, any>,
) {
    return defineElementNoInputs({
        tagName: `toniq-test-state-helper-${randomString(8)}`,
        stateInitStatic,
        renderCallback: callback,
    } as VerifiedElementNoInputsInit<any, any, any, any, any, any, any>);
}
