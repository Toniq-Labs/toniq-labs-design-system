import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
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
    examples: [
        createExample({
            title: 'Assigned value',
            stateInit: {
                value: 'init value',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'Placeholder',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'Icon',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
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
            render({state, updateState}) {
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
        }),
        createExample({
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
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'Outline style',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'Letter "a" blocked',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'With suffix',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'only numbers allowed',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'disabled',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
        createExample({
            title: 'no browser auto-helps',
            stateInit: {
                value: '',
            },
            render({state, updateState}) {
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
        }),
    ],
});

export const toniqInputBookEntries = [
    toniqInputChapter,
    toniqInputPage,
];
