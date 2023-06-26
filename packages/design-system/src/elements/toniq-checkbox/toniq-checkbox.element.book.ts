import {omitObjectKeys} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {
    cssVarControlValuesToStyles,
    cssVarsToPageControls,
} from '../../element-book/book-helpers/css-var-page-controls';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqCheckbox} from './toniq-checkbox.element';

const exampleVariations: ReadonlyArray<{
    title: string;
    inputs: Partial<typeof ToniqCheckbox.inputsType>;
}> = [
    {
        title: 'default',
        inputs: {},
    },
    {
        title: 'disabled',
        inputs: {
            disabled: true,
        },
    },
];

const innerExampleVariations: ReadonlyArray<{
    extraEntries?: ReadonlyArray<string>;
    inputs: Partial<typeof ToniqCheckbox.inputsType>;
}> = [
    {
        inputs: {
            checked: false,
        },
    },
    {
        inputs: {
            checked: true,
        },
    },
    {
        extraEntries: ['With much longer checkbox label string'],
        inputs: {
            checked: false,
        },
    },
];

export const toniqCheckboxPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqCheckbox.tagName,
    controls: {
        Text: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'Text',
        }),
        ...cssVarsToPageControls(ToniqCheckbox),
    },
    elementExamplesCallback({defineExample}) {
        exampleVariations.forEach((exampleVariation) => {
            defineExample({
                title: exampleVariation.title,
                stateInitStatic: {
                    checkedStatuses: innerExampleVariations.map(
                        (exampleVariation) => !!exampleVariation.inputs.checked,
                    ),
                    extraEntryStatuses: innerExampleVariations.map((exampleVariation) =>
                        (exampleVariation.extraEntries ?? []).map(() => false),
                    ),
                },
                styles: css`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }

                    .checkbox-group {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        max-width: 250px;
                    }
                `,
                renderCallback({state, updateState, controls}) {
                    return innerExampleVariations.map((innerExampleVariation, exampleIndex) => {
                        const extraEntries = (innerExampleVariation.extraEntries ?? []).map(
                            (extraEntry, extraEntryIndex) => {
                                return html`
                                    <${ToniqCheckbox}
                                        ${assign(ToniqCheckbox, {
                                            ...exampleVariation.inputs,
                                            ...omitObjectKeys(innerExampleVariation.inputs, [
                                                'checked',
                                            ]),
                                            checked:
                                                !!state.extraEntryStatuses[exampleIndex]?.[
                                                    extraEntryIndex
                                                ],
                                            text: extraEntry,
                                        })}
                                        ${listen(ToniqCheckbox.events.checkedChange, () => {
                                            const newStates = [...state.extraEntryStatuses];
                                            newStates[exampleIndex]![extraEntryIndex] =
                                                !newStates[exampleIndex]![extraEntryIndex];
                                            updateState({extraEntryStatuses: newStates});
                                        })}
                                    ></${ToniqCheckbox}>
                                `;
                            },
                        );

                        const customCssVarStyles = cssVarControlValuesToStyles(controls);

                        return html`
                            <div class="checkbox-group" style=${customCssVarStyles}>
                                <${ToniqCheckbox}
                                    ${assign(ToniqCheckbox, {
                                        ...exampleVariation.inputs,
                                        ...omitObjectKeys(innerExampleVariation.inputs, [
                                            'checked',
                                        ]),
                                        checked: state.checkedStatuses[exampleIndex]!,
                                        text: controls.Text,
                                    })}
                                    ${listen(ToniqCheckbox.events.checkedChange, () => {
                                        const newStates = [...state.checkedStatuses];
                                        newStates[exampleIndex] = !newStates[exampleIndex];
                                        updateState({checkedStatuses: newStates});
                                    })}
                                ></${ToniqCheckbox}>
                                ${extraEntries}
                            </div>
                        `;
                    });
                },
            });
        });
    },
});
