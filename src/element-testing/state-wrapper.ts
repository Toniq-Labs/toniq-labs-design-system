import {randomString} from '@augment-vir/browser';
import {defineElementNoInputs, PropertyInitMapBase, RenderCallback} from 'element-vir';

export function createStateWrapper<StateGeneric extends PropertyInitMapBase>(
    stateInit: StateGeneric,
    callback: RenderCallback<{}, StateGeneric, {}, '', ''>,
) {
    return defineElementNoInputs({
        tagName: `toniq-test-state-helper-${randomString(8)}`,
        stateInit,
        renderCallback: callback,
    });
}
