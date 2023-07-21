import {typedMap} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqRadioGroup, ToniqRadioGroupEntry} from './toniq-radio-group.element';

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

export const toniqRadioGroupPage = defineBookPage({
    title: ToniqRadioGroup.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Default',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.basic,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
        defineExample({
            title: 'Inline',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    flex-direction: row;
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.basic,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
        defineExample({
            title: 'Restricted width',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.longText[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    max-width: 200px;
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.longText,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
        defineExample({
            title: 'No labels',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.noLabels[0].value as string,
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.noLabels,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
        defineExample({
            title: 'Entry 1 disabled',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.disabled[1]!.value as string,
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.disabled,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
        defineExample({
            title: 'Custom CSS vars',
            stateInitStatic: {
                selectedValue: exampleRadioGroupEntries.basic[0].value as string,
            },
            styles: css`
                ${ToniqRadioGroup} {
                    ${ToniqRadioGroup.cssVars['toniq-radio-group-checked-label-color'].name}: red;
                    ${ToniqRadioGroup.cssVars['toniq-radio-group-checked-radio-color'].name}: blue;
                    ${ToniqRadioGroup.cssVars['toniq-radio-group-unchecked-label-color']
                        .name}: green;
                    ${ToniqRadioGroup.cssVars['toniq-radio-group-unchecked-radio-color']
                        .name}: pink;
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqRadioGroup.assign({
                        entries: exampleRadioGroupEntries.basic,
                        value: state.selectedValue,
                    })}
                        ${listen(ToniqRadioGroup.events.valueChange, (event) => {
                            updateState({selectedValue: event.detail});
                        })}
                    ></${ToniqRadioGroup}>
                `;
            },
        });
    },
});
