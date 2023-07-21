import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqMiddleEllipsis} from './toniq-middle-ellipsis.element';

export const toniqMiddleEllipsisPage = defineBookPage({
    title: ToniqMiddleEllipsis.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'Long text',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis.assign({
                        text: 'Long string instead of text',
                    })}></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'Short text',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis.assign({
                        text: 'Short text',
                    })}></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'External Link',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis.assign({
                        text: 'Long text with link',
                        externalLink: 'https://toniqlabs.com',
                    })}></${ToniqMiddleEllipsis}>
                `;
            },
        });
        defineExample({
            title: 'Copyable',
            renderCallback() {
                return html`
                    <${ToniqMiddleEllipsis.assign({
                        text: 'Long text that you can copy',
                        copyOnClick: true,
                    })}></${ToniqMiddleEllipsis}>
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
                    <${ToniqMiddleEllipsis.assign({
                        text: 'long text with custom colors',
                        copyOnClick: true,
                    })}></${ToniqMiddleEllipsis}>
                `;
            },
        });
    },
});
