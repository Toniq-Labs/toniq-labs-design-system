import {defineBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Trash24Icon} from '../../icons';
import {ToniqButton, ToniqButtonStyleEnum} from './toniq-button.element';

export const toniqButtonPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqButton.tagName,
    elementExamplesCallback({defineExample}) {
        const exampleSetups: ReadonlyArray<{name: string; inputs: typeof ToniqButton.inputsType}> =
            [
                {
                    name: 'default',
                    inputs: {},
                },
                {
                    name: 'Secondary',
                    inputs: {
                        buttonStyle: ToniqButtonStyleEnum.Secondary,
                    },
                },
                {
                    name: 'Outline',
                    inputs: {
                        buttonStyle: ToniqButtonStyleEnum.Outline,
                    },
                },
                {
                    name: 'Disabled',
                    inputs: {
                        disabled: true,
                    },
                },
            ];

        exampleSetups.forEach((exampleSetup) => {
            defineExample({
                title: exampleSetup.name,
                stateInitStatic: {
                    showIcon: false,
                    timeoutId: undefined as number | undefined,
                },
                styles: css`
                    :host {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 16px;
                    }

                    .icon-toggle {
                        flex-basis: 120px;
                        flex-shrink: 0;
                        width: 120px;
                        max-width: 120px;
                    }
                `,
                renderCallback({state, updateState}) {
                    if (!state.timeoutId) {
                        updateState({
                            timeoutId: window.setTimeout(() => {
                                updateState({
                                    showIcon: !state.showIcon,
                                    timeoutId: undefined,
                                });
                            }, 1000),
                        });
                    }

                    return html`
                        <${ToniqButton}
                            ${assign(ToniqButton, {
                                text: 'Button',
                                ...exampleSetup.inputs,
                            })}
                        ></${ToniqButton}>
                        <${ToniqButton}
                            ${assign(ToniqButton, {
                                icon: Trash24Icon,
                                ...exampleSetup.inputs,
                            })}
                        ></${ToniqButton}>
                        <${ToniqButton}
                            class="icon-toggle"
                            ${assign(
                                ToniqButton,
                                state.showIcon
                                    ? {
                                          icon: Trash24Icon,
                                          text: 'icon',
                                          ...exampleSetup.inputs,
                                      }
                                    : {
                                          text: 'no icon',
                                          ...exampleSetup.inputs,
                                      },
                            )}
                        ></${ToniqButton}>
                        <${ToniqButton}
                            ${assign(ToniqButton, {
                                text: 'Button',
                                icon: Trash24Icon,
                                ...exampleSetup.inputs,
                            })}
                        ></${ToniqButton}>
                        <${ToniqButton}
                            ${assign(ToniqButton, {
                                ...exampleSetup.inputs,
                            })}
                        >
                            <span>HTML Child</span>
                        </${ToniqButton}>
                        <${ToniqButton}
                            style="height: 100px; width: 200px;"
                            ${assign(ToniqButton, {text: 'bigger', ...exampleSetup.inputs})}
                        ></${ToniqButton}>
                    `;
                },
            });
        });
    },
});
