import {getObjectTypedKeys} from 'augment-vir';
import {useReducer} from 'react';

export function createMultiElementStateReducer<StateGeneric extends Record<string, any>>(
    initState: StateGeneric,
) {
    return useReducer(
        (
            state: StateGeneric,
            {key, value}: {key: keyof StateGeneric; value: StateGeneric[typeof key]},
        ): StateGeneric => {
            const newState: StateGeneric = {
                ...state,
                [key]: value,
            };

            console.log({newState});
            return newState;
        },
        initState,
    );
}

export function stateToKeyObject<StateGeneric extends Record<string, any>>(
    state: StateGeneric,
): Readonly<{[Prop in keyof StateGeneric]: Prop}> {
    return getObjectTypedKeys(state).reduce((accum, key) => {
        accum[key] = key;
        return accum;
    }, {} as {[Prop in keyof StateGeneric]: Prop});
}
