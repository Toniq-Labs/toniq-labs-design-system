import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ToniqCheckbox} from './toniq-checkbox.element';

const toniqCheckboxChapter = defineElementBookChapter({
    title: 'Checkbox',
    parent: elementsBookChapter,
});

const toniqCheckboxPage = defineElementBookPage({
    title: ToniqCheckbox.tagName,
    parent: toniqCheckboxChapter,
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'Unchecked',
            stateInitStatic: {
                checked: false,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Checked',
            stateInitStatic: {
                checked: true,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'HTML Child',
            stateInitStatic: {
                checked: false,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Custom CSS Vars',
            stateInitStatic: {
                checked: false,
            },
            styles: css`
                :host {
                    ${ToniqCheckbox.cssVars['toniq-checkbox-unchecked-checkbox-color'].name}: red;
                    ${ToniqCheckbox.cssVars['toniq-checkbox-unchecked-label-color'].name}: orange;
                    ${ToniqCheckbox.cssVars['toniq-checkbox-checked-checkbox-color'].name}: green;
                    ${ToniqCheckbox.cssVars['toniq-checkbox-checked-check-color'].name}: blue;
                    ${ToniqCheckbox.cssVars['toniq-checkbox-checked-label-color'].name}: purple;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Multiple',
            stateInitStatic: {
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
            renderCallback({state, updateState}) {
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
        });
    },
});

export const toniqCheckboxBookEntries = [
    toniqCheckboxChapter,
    toniqCheckboxPage,
];
