import {defineBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqSlider, ToniqSliderInputs} from './toniq-slider.element';

const defaultExampleWidth = css`
    ${ToniqSlider} {
        width: 300px;
    }
`;

const defaultMinMax = {
    min: 10,
    max: 50,
} as const satisfies Pick<ToniqSliderInputs, 'min' | 'max'>;

export const toniqSliderPage = defineBookPage({
    title: ToniqSlider.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Default',
            stateInitStatic: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Double range',
            stateInitStatic: {
                value: {min: 10, max: 72},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Suffix',
            stateInitStatic: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Log Scale',
            stateInitStatic: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Log Scale Double',
            stateInitStatic: {
                value: {min: 10, max: 1000},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Decimals',
            stateInitStatic: {
                value: {min: 1.95, max: 50},
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Negative min',
            stateInitStatic: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Padding',
            stateInitStatic: {
                value: 20,
            },
            styles: css`
                ${defaultExampleWidth}

                ${ToniqSlider} {
                    padding: 32px;
                }
            `,
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Padding Double',
            stateInitStatic: {
                value: {min: 10, max: 72},
            },
            styles: css`
                ${defaultExampleWidth}

                ${ToniqSlider} {
                    padding: 32px;
                }
            `,
            renderCallback({state, updateState}) {
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
        });
    },
});
