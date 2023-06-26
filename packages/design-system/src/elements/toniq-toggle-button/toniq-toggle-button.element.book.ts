import {omitObjectKeys} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Rocket24Icon} from '../../icons';
import {allIconNames, allIconsByName} from '../../icons/icon.book-helper';
import {ToniqToggleButton, ToniqToggleButtonStyleEnum} from './toniq-toggle-button.element';

const toniqToggleButtonBookChapter = defineBookPage({
    title: 'Toggle Button',
    parent: elementsBookPage,
});

const exampleStyleVariations: ReadonlyArray<{
    title: string;
    inputs: Partial<typeof ToniqToggleButton.inputsType>;
}> = [
    {
        title: 'default',
        inputs: {},
    },
    {
        title: 'text only',
        inputs: {
            style: ToniqToggleButtonStyleEnum.TextOnly,
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
        Icon: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: Rocket24Icon.iconName,
            options: [
                'None',
                ...allIconNames,
            ],
        }),
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
                            <${ToniqToggleButton}
                                ${assign(ToniqToggleButton, {
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
