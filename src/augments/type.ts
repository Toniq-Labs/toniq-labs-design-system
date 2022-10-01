/**
 * This function returns another function that simply returns whatever input it's given. However, it
 * also checks that the input matches the original wrapTypeWithReadonly's generic, while maintaining
 * strict "const" like typing.
 */
export function wrapTypeWithReadonly<P>() {
    return <T extends P>(input: T): Readonly<T> => {
        return input;
    };
}

export type UndefinedValues<T extends object> = Partial<Record<keyof T, undefined>>;

export type ValueOf<T> = T[keyof T];
