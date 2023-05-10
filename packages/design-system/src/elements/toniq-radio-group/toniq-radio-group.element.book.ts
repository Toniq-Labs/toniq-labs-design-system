import {typedMap} from '@augment-vir/common';
import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ToniqRadioGroup, ToniqRadioGroupEntry} from './toniq-radio-group.element';

const toniqRadioGroupChapter = defineElementBookChapter({
    title: 'Radio Group',
    parent: elementsBookChapter,
});

const basicExampleEntries = [
    {
        value: '1',
        label: 'Entry 1',
    },
    {
        value: '2',
        label: 'Entry 2',
    },
    {
        value: '3',
        label: 'Entry 3',
    },
] as const;

const exampleRadioGroupEntries = {
    basic: basicExampleEntries,
    longText: [
        {
            value: 'first',
            label: 'Entry 1 with really really really really really really really really really long label',
        },
        ...basicExampleEntries.slice(1),
    ],
    disabled: [
        {
            ...basicExampleEntries[0],
            disabled: true,
        },
        ...basicExampleEntries.slice(1),
    ],
    noLabels: typedMap(basicExampleEntries, (entry) => {
        return {
            ...entry,
            label: undefined,
        };
    }),
} as const satisfies Record<string, ReadonlyArray<ToniqRadioGroupEntry>>;

const toniqRadioGroupPage = defineElementBookPage({
    title: ToniqRadioGroup.tagName,
    parent: toniqRadioGroupChapter,
    examples: [
        createExample({
            title: 'Default',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.basic,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
        createExample({
            title: 'Inline',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    flex-direction: row;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.basic,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
        createExample({
            title: 'Restricted width',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.longText[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    max-width: 200px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.longText,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
        createExample({
            title: 'No labels',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.noLabels[0].value as string,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.noLabels,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
        createExample({
            title: 'Entry 1 disabled',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.disabled[1]!.value as string,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.disabled,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
        createExample({
            title: 'Custom CSS vars',
            stateInit: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    ${ToniqRadioGroup.cssVarNames.checkedLabelColor}: red;
                    ${ToniqRadioGroup.cssVarNames.checkedRadioColor}: blue;
                    ${ToniqRadioGroup.cssVarNames.uncheckedLabelColor}: green;
                    ${ToniqRadioGroup.cssVarNames.uncheckedRadioColor}: pink;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqRadioGroup}
                        ${assign(ToniqRadioGroup, {
                            entries: exampleRadioGroupEntries.basic,
                            value: state.selectedValue,
                        })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        }),
    ],
});

export const toniqRadioGroupBookEntries = [
    toniqRadioGroupChapter,
    toniqRadioGroupPage,
];
