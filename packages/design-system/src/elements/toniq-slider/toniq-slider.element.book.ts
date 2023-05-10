import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {ToniqSlider, ToniqSliderInputs} from './toniq-slider.element';

const toniqSliderChapter = defineElementBookChapter({
    title: 'Toniq Slider',
    parent: toniqElementsBookChapter,
});

const defaultExampleWidth = css`
    ${ToniqSlider} {
        width: 300px;
    }
`;

const defaultMinMax = {
    min: 10,
    max: 50,
} as const satisfies Pick<ToniqSliderInputs, 'min' | 'max'>;

const toniqSliderPage = defineElementBookPage({
    title: ToniqSlider.tagName,
    parent: toniqSliderChapter,
    examples: [
        createExample({
            title: 'Default',
            stateInit: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            ...defaultMinMax,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail !== 'number') {
                                throw new Error('was expecting a single numeric slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Double range',
            stateInit: {
                value: {min: 10, max: 72},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            double: true,
                            value: state.value,
                            min: 0,
                            max: 100,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail === 'number') {
                                throw new Error('was expecting a double slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Suffix',
            stateInit: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            ...defaultMinMax,
                            suffix: 'ICP',
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail !== 'number') {
                                throw new Error('was expecting a single numeric slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Log Scale',
            stateInit: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            min: 0,
                            max: 1_000_000,
                            suffix: 'ICP',
                            logScale: true,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail !== 'number') {
                                throw new Error('was expecting a single numeric slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Log Scale Double',
            stateInit: {
                value: {min: 10, max: 1000},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            double: true,
                            min: 0,
                            max: 1_000_000,
                            logScale: true,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail === 'number') {
                                throw new Error('was expecting a double slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Decimals',
            stateInit: {
                value: {min: 1.95, max: 50},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            double: true,
                            min: 1.95,
                            max: 100.5,
                            logScale: true,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail === 'number') {
                                throw new Error('was expecting a double slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Negative min',
            stateInit: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            min: -100,
                            max: 100,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail !== 'number') {
                                throw new Error('was expecting a single numeric slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Padding',
            stateInit: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}

                ${ToniqSlider} {
                    padding: 32px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            value: state.value,
                            ...defaultMinMax,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail !== 'number') {
                                throw new Error('was expecting a single numeric slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
        createExample({
            title: 'Padding Double',
            stateInit: {
                value: {min: 10, max: 72},
            },
            styles: css`
                ${defaultExampleWidth}

                ${ToniqSlider} {
                    padding: 32px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider, {
                            double: true,
                            value: state.value,
                            min: 0,
                            max: 100,
                        })}
                        ${listen(ToniqSlider.events.valueChange, (event) => {
                            if (typeof event.detail === 'number') {
                                throw new Error('was expecting a double slider value');
                            }
                            updateState({value: event.detail});
                        })}
                    ></${ToniqSlider}>
                `;
            },
        }),
    ],
});

export const toniqSliderBookEntries = [
    toniqSliderChapter,
    toniqSliderPage,
];
