import {omitObjectKeys} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Rocket24Icon} from '../../icons';
import {allIconsByName, createIconPicker} from '../../icons/icon.book-helper';
import {
    ToniqToggleButton,
    ToniqToggleButtonIconPlacementEnum,
    ToniqToggleButtonVariantEnum,
} from './toniq-toggle-button.element';

const exampleStyleVariations: ReadonlyArray<{
    title: string;
    inputs: Partial<typeof ToniqToggleButton.inputsType>;
}> = [
    {
        title: 'default',
        inputs: {},
    },
    {
        title: 'right icon',
        inputs: {
            iconPlacement: ToniqToggleButtonIconPlacementEnum.Right,
        },
    },
    {
        title: 'text only',
        inputs: {
            variant: ToniqToggleButtonVariantEnum.TextOnly,
        },
    },
    {
        title: 'disabled',
        inputs: {
            disabled: true,
        },
    },
];

const innerExampleVariations: ReadonlyArray<{
    inputs: Partial<typeof ToniqToggleButton.inputsType>;
}> = [
    {
        inputs: {
            icon: undefined,
        },
    },
    {
        inputs: {
            toggled: true,
        },
    },
    {
        inputs: {},
    },
    {
        inputs: {
            text: undefined,
        },
    },
];

export const toniqToggleButtonBookPage = defineBookPage({
    title: ToniqToggleButton.tagName,
    parent: elementsBookPage,
    controls: {
        Text: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'Toggle Button',
        }),
        Icon: createIconPicker(Rocket24Icon.name),
    },
    elementExamplesCallback({defineExample}) {
        exampleStyleVariations.forEach((styleVariation) => {
            defineExample({
                title: styleVariation.title,
                stateInitStatic: {
                    buttonStates: innerExampleVariations.map(
                        (innerExampleVariation) => !!innerExampleVariation.inputs.toggled,
                    ),
                },
                styles: css`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,
                renderCallback({state, updateState, controls}) {
                    return innerExampleVariations.map((innerExampleVariation, index) => {
                        return html`
                            <${ToniqToggleButton.assign({
                                ...styleVariation.inputs,
                                toggled: state.buttonStates[index]!,
                                icon: allIconsByName[controls.Icon],
                                text: controls.Text,
                                ...omitObjectKeys(innerExampleVariation.inputs, ['toggled']),
                            })}
                                ${listen('click', () => {
                                    const newStates = [...state.buttonStates];
                                    newStates[index] = !newStates[index];
                                    updateState({buttonStates: newStates});
                                })}
                            ></${ToniqToggleButton}>
                        `;
                    });
                },
            });
        });
    },
});
