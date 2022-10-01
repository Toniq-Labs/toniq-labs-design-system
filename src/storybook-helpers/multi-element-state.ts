import {getObjectTypedKeys} from 'augment-vir';
import {useReducer, useRef} from 'react';

export function createMultiElementState<StateGeneric extends Record<string, any>>(
    initState: StateGeneric,
) {
    const reference = useRef(initState);
    // since the above is not a state object, we have to force updates with the following:
    const [
        ,
        forceUpdate,
    ] = useReducer((x) => x + 1, 0);

    function updateState({key, value}: {key: keyof StateGeneric; value: StateGeneric[typeof key]}) {
        reference.current[key] = value;
        forceUpdate();
    }

    const keysEnum = stateToKeyObject(initState);

    return [
        reference.current as StateGeneric,
        updateState,
        keysEnum,
    ] as const;
}

function stateToKeyObject<StateGeneric extends Record<string, any>>(
    state: StateGeneric,
): Readonly<{[Prop in keyof StateGeneric]: Prop}> {
    return getObjectTypedKeys(state).reduce((accum, key) => {
        accum[key] = key;
        return accum;
    }, {} as {[Prop in keyof StateGeneric]: Prop});
}
