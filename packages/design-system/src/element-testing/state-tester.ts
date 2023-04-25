import {randomString} from '@augment-vir/browser';
import {
    CustomElementTagName,
    defineElementNoInputs,
    PropertyInitMapBase,
    RenderCallback,
} from 'element-vir';

export function createStateTester<StateGeneric extends PropertyInitMapBase>(
    stateInit: StateGeneric,
    callback: RenderCallback<CustomElementTagName, {}, StateGeneric, {}, '', ''>,
) {
    return defineElementNoInputs({
        tagName: `toniq-test-state-helper-${randomString(8)}`,
        stateInit,
        renderCallback: callback,
    });
}
