import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    DefineExampleCallback,
    ElementBookPage,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, css, html} from 'element-vir';
import {unsafeCSS} from 'lit';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {CircleDot24Icon, Trash24Icon} from '../../icons';
import {InfoCircle16Icon} from '../../icons/svgs/core-16/info-circle-16.icon';
import {ArrowLoopRight24Icon} from '../../icons/svgs/core-24/arrow-loop-right-24.icon';
import {Kyc32Icon} from '../../icons/svgs/core-32/kyc-32.icon';
import {FolderOff48Icon} from '../../icons/svgs/core-48/folder-off-48.icon';
import {Api64Icon} from '../../icons/svgs/core-64/api-64.icon';
import {toniqIconColorCssVarNames} from '../../styles';
import {ToniqIcon} from './toniq-icon.element';

const toniqIconBookChapter = defineElementBookChapter({
    title: 'Icon',
    parent: elementsBookChapter,
});

const toniqIconBookPages = mapObjectValues(
    ensureType<Record<string, (defineExample: DefineExampleCallback<{}>) => void>>({
        [ToniqIcon.tagName]: (defineExample) => {
            defineExample({
                title: 'With Icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Trash24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: 'Without Icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: undefined,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: '64px icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Api64Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: '48px icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: FolderOff48Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: '32px icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Kyc32Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: '24px icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: ArrowLoopRight24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: '16px icon',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: InfoCircle16Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
        },
        [`${ToniqIcon.tagName} colors`]: (defineExample: DefineExampleCallback<{}>) => {
            defineExample({
                title: 'Inherited',
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: 'Using "color"',
                styles: css`
                    :host {
                        color: red;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: toniqIconColorCssVarNames.color,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.color)}: red;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: toniqIconColorCssVarNames.strokeColor,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.strokeColor)}: red;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
            defineExample({
                title: toniqIconColorCssVarNames.fillColor,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.fillColor)}: red;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            });
        },
    }),
    (pageTitle, createExamples) => {
        return defineElementBookPage({
            title: pageTitle,
            defineExamplesCallback({defineExample}) {
                createExamples(defineExample);
            },
            parent: toniqIconBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqIconBookEntries = [
    toniqIconBookChapter,
    ...Object.values(toniqIconBookPages),
];
