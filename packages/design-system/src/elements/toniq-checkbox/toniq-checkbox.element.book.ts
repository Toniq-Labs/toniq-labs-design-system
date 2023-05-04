import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {ToniqCheckbox} from './toniq-checkbox.element';

const toniqCheckboxChapter = defineElementBookChapter({
    title: 'Toniq Checkbox',
    parent: toniqElementsBookChapter,
});

const toniqCheckboxPage = defineElementBookPage({
    title: ToniqCheckbox.tagName,
    parent: toniqCheckboxChapter,
    examples: [
        createExample({
            title: 'Unchecked',
            stateInit: {
                checked: false,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checked,
                            text: 'My Checkbox',
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checked: event.detail});
                        })}
                    ></${ToniqCheckbox}>
                `;
            },
        }),
        createExample({
            title: 'Checked',
            stateInit: {
                checked: true,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checked,
                            text: 'My Checkbox',
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checked: event.detail});
                        })}
                    ></${ToniqCheckbox}>
                `;
            },
        }),
        createExample({
            title: 'HTML Child',
            stateInit: {
                checked: false,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checked,
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checked: event.detail});
                        })}
                    >
                        With HTML Child
                    </${ToniqCheckbox}>
                `;
            },
        }),
        createExample({
            title: 'Custom CSS Vars',
            stateInit: {
                checked: false,
            },
            styles: css`
                :host {
                    ${ToniqCheckbox.cssVarNames.uncheckedCheckboxColor}: red;
                    ${ToniqCheckbox.cssVarNames.uncheckedLabelColor}: orange;
                    ${ToniqCheckbox.cssVarNames.checkedCheckboxColor}: green;
                    ${ToniqCheckbox.cssVarNames.checkedCheckColor}: blue;
                    ${ToniqCheckbox.cssVarNames.checkedLabelColor}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checked,
                            text: 'wild colors',
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checked: event.detail});
                        })}
                    ></${ToniqCheckbox}>
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: !state.checked,
                            text: `wild colors (${state.checked ? 'unchecked' : 'checked'})`,
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checked: !event.detail});
                        })}
                    ></${ToniqCheckbox}>
                `;
            },
        }),
        createExample({
            title: 'Multiple',
            stateInit: {
                checkedShort: false,
                checkedLong: false,
            },
            styles: css`
                :host {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 250px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checkedShort,
                            text: 'Short',
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checkedShort: event.detail});
                        })}
                    ></${ToniqCheckbox}>
                    <${ToniqCheckbox}
                        ${assign(ToniqCheckbox, {
                            checked: state.checkedLong,
                            text: `With much longer checkbox label string`,
                        })}
                        ${listen(ToniqCheckbox.events.checkedChange, (event) => {
                            updateState({checkedLong: event.detail});
                        })}
                    ></${ToniqCheckbox}>
                `;
            },
        }),
    ],
});

export const toniqCheckboxBookEntries = [
    toniqCheckboxChapter,
    toniqCheckboxPage,
];
