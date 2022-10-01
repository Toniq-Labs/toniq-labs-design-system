import {randomString} from 'augment-vir';
import {defineElementNoInputs, PropertyInitMapBase} from 'element-vir';
import {RenderCallback} from '../../node_modules/element-vir/dist/declarative-element/render-callback';

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
