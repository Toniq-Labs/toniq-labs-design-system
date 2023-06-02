import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ToniqMiddleEllipsis} from './toniq-middle-ellipsis.element';

const toniqMiddleEllipsisChapter = defineElementBookChapter({
    title: 'Middle Ellipsis',
    parent: elementsBookChapter,
});

const toniqMiddleEllipsisPage = defineElementBookPage({
    title: ToniqMiddleEllipsis.tagName,
    parent: toniqMiddleEllipsisChapter,
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'Long text',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long string instead of text',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'Short text',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Short text',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'External Link',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long text with link',
                            externalLink: 'https://toniqlabs.com',
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'Copyable',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'Long text that you can copy',
                            copyOnClick: true,
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'Custom CSS vars',
            styles: css`
                ${ToniqMiddleEllipsis} {
                    ${ToniqMiddleEllipsis.cssVars['toniq-middle-ellipsis-icon-color'].name}: red;
                    ${ToniqMiddleEllipsis.cssVars['toniq-middle-ellipsis-icon-hover-color']
                        .name}: blue;
                    ${ToniqMiddleEllipsis.cssVars['toniq-middle-ellipsis-text-color'].name}: green;
                    ${ToniqMiddleEllipsis.cssVars['toniq-middle-ellipsis-text-hover-color']
                        .name}: purple;
                }
            `,
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis}
                        ${assign(ToniqMiddleEllipsis, {
                            text: 'long text with custom colors',
                            copyOnClick: true,
                        })}
                    ></${ToniqMiddleEllipsis}>
                `;
            },
        });
    },
});

export const toniqMiddleEllipsisBookEntries = [
    toniqMiddleEllipsisChapter,
    toniqMiddleEllipsisPage,
];
