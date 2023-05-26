import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {Search24Icon} from '../../icons';
import {ToniqInput} from './toniq-input.element';

const toniqInputChapter = defineElementBookChapter({
    title: 'Input',
    parent: elementsBookChapter,
});

const toniqInputPage = defineElementBookPage({
    title: ToniqInput.tagName,
    parent: toniqInputChapter,
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'Assigned value',
            stateInit: {
                value: 'init value',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Placeholder',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'my placeholder',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Icon',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'with icon',
                            icon: Search24Icon,
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Custom size (big)',
            stateInit: {
                value: '',
            },
            styles: css`
                ${ToniqInput} {
                    height: 75px;
                    width: 300px;
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'stretched',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Custom size (small)',
            stateInit: {
                value: '',
            },
            styles: css`
                ${ToniqInput} {
                    height: 40px;
                    width: 140px;
                }
            `,
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'squished',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Outline style',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        class=${ToniqInput.hostClasses.outline}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'outline',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'Letter "a" blocked',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            blockedInputs: 'a',
                            placeholder: 'try typing a',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'With suffix',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'my placeholder',
                            suffix: 'ckBTC',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'only numbers allowed',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            allowedInputs: /\d/,
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'disabled',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            disabled: true,
                            placeholder: 'cannot select',
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
        defineExample({
            title: 'no browser auto-helps',
            stateInit: {
                value: '',
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: state.value,
                            placeholder: 'try typing "im"',
                            disableBrowserHelps: true,
                        })}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            updateState({value: event.detail});
                        })}
                    ></${ToniqInput}>
                `;
            },
        });
    },
});

export const toniqInputBookEntries = [
    toniqInputChapter,
    toniqInputPage,
];
