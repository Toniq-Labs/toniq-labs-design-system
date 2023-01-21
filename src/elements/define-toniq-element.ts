import {wrapDefineElement} from 'element-vir';

export const ToniqTagNamePrefix = `toniq-`;
export type ToniqTagName = `${typeof ToniqTagNamePrefix}${string}`;

export const {
    defineElement: defineToniqElement,
    defineElementNoInputs: defineToniqElementNoInputs,
} = wrapDefineElement<ToniqTagName>({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith(ToniqTagNamePrefix)) {
            throw new Error(
                `Tag name should start with '${ToniqTagNamePrefix}' but got '${inputs.tagName}'`,
            );
        }
    },
});
