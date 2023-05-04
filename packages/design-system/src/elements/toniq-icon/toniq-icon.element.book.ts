import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    ElementBookPage,
    ElementBookPageExample,
    createExample,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, css, html} from 'element-vir';
import {unsafeCSS} from 'lit';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {CircleDot24Icon, Trash24Icon} from '../../icons';
import {InfoCircle16Icon} from '../../icons/svgs/core-16/info-circle-16.icon';
import {ArrowLoopRight24Icon} from '../../icons/svgs/core-24/arrow-loop-right-24.icon';
import {Kyc32Icon} from '../../icons/svgs/core-32/kyc-32.icon';
import {FolderOff48Icon} from '../../icons/svgs/core-48/folder-off-48.icon';
import {Api64Icon} from '../../icons/svgs/core-64/api-64.icon';
import {toniqIconColorCssVarNames} from '../../styles';
import {ToniqIcon} from './toniq-icon.element';

const toniqIconBookChapter = defineElementBookChapter({
    title: 'Toniq Icon',
    parent: toniqElementsBookChapter,
});

const toniqIconBookPages = mapObjectValues(
    ensureType<Record<string, ElementBookPageExample[]>>({
        [ToniqIcon.tagName]: [
            createExample({
                title: 'With Icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Trash24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: 'Without Icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: undefined,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: '64px icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Api64Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: '48px icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: FolderOff48Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: '32px icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: Kyc32Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: '24px icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: ArrowLoopRight24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: '16px icon',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: InfoCircle16Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
        ],
        [`${ToniqIcon.tagName} colors`]: [
            createExample({
                title: 'Inherited',
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: 'Using "color"',
                styles: css`
                    :host {
                        color: red;
                    }
                `,
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: toniqIconColorCssVarNames.color,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.color)}: red;
                    }
                `,
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: toniqIconColorCssVarNames.strokeColor,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.strokeColor)}: red;
                    }
                `,
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
            createExample({
                title: toniqIconColorCssVarNames.fillColor,
                styles: css`
                    :host {
                        ${unsafeCSS(toniqIconColorCssVarNames.fillColor)}: red;
                    }
                `,
                render() {
                    return html`
                        <${ToniqIcon}
                            ${assign(ToniqIcon, {
                                icon: CircleDot24Icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                },
            }),
        ],
    }),
    (key, value) => {
        return defineElementBookPage({title: key, examples: value, parent: toniqIconBookChapter});
    },
) satisfies Record<string, ElementBookPage>;

export const toniqIconBookEntries = [
    toniqIconBookChapter,
    ...Object.values(toniqIconBookPages),
];
