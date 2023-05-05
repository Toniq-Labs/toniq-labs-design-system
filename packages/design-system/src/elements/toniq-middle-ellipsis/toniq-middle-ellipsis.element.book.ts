import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {ToniqMiddleEllipsis} from './toniq-middle-ellipsis.element';

const toniqMiddleEllipsisChapter = defineElementBookChapter({
    title: 'Toniq Middle Ellipsis',
    parent: toniqElementsBookChapter,
});

const toniqMiddleEllipsisPage = defineElementBookPage({
    title: ToniqMiddleEllipsis.tagName,
    parent: toniqMiddleEllipsisChapter,
    examples: [
        createExample({
            title: 'Long text',
            render() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long string instead of text',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        }),
        createExample({
            title: 'Short text',
            render() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Short text',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        }),
        createExample({
            title: 'External Link',
            render() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long text with link',
                            externalLink: 'https://bioniq.io',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        }),
        createExample({
            title: 'Copyable',
            render() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long text that you can copy',
                            copyOnClick: true,
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        }),
        createExample({
            title: 'Custom CSS vars',
            styles: css`
                ${ToniqMiddleEllipsis} {
                    ${ToniqMiddleEllipsis.cssVarNames.iconColor}: red;
                    ${ToniqMiddleEllipsis.cssVarNames.iconHoverColor}: blue;
                    ${ToniqMiddleEllipsis.cssVarNames.textColor}: green;
                    ${ToniqMiddleEllipsis.cssVarNames.textHoverColor}: purple;
                }
            `,
            render() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'long text with custom colors',
                            copyOnClick: true,
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        }),
    ],
});

export const toniqMiddleEllipsisBookEntries = [
    toniqMiddleEllipsisChapter,
    toniqMiddleEllipsisPage,
];
