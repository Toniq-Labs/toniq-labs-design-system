import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Trash24Icon} from '../../icons';
import {ToniqButton, ToniqButtonVariantEnum} from './toniq-button.element';

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
                        variant: ToniqButtonVariantEnum.Secondary,
                    },
                },
                {
                    name: 'Outline',
                    inputs: {
                        variant: ToniqButtonVariantEnum.Outline,
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
                        <${ToniqButton.assign({
                            text: 'Button',
                            ...exampleSetup.inputs,
                        })}></${ToniqButton}>
                        <${ToniqButton.assign({
                            icon: Trash24Icon,
                            ...exampleSetup.inputs,
                        })}></${ToniqButton}>
                        <${ToniqButton.assign(
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
                            class="icon-toggle"
                        ></${ToniqButton}>
                        <${ToniqButton.assign({
                            text: 'Button',
                            icon: Trash24Icon,
                            ...exampleSetup.inputs,
                        })}></${ToniqButton}>
                        <${ToniqButton.assign({
                            ...exampleSetup.inputs,
                        })}>
                            <span>HTML Child</span>
                        </${ToniqButton}>
                        <${ToniqButton.assign({
                            text: 'bigger',
                            ...exampleSetup.inputs,
                        })}
                            style="height: 100px; width: 200px;"
                        ></${ToniqButton}>
                    `;
                },
            });
        });
    },
});
