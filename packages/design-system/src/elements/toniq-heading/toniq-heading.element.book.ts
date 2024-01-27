import {getEnumTypedValues} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqHeading, ToniqHeadingLevel} from './toniq-heading.element';

export const toniqHeadingBookPage = defineBookPage({
    title: ToniqHeading.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        getEnumTypedValues(ToniqHeadingLevel).forEach((headingLevel) => {
            defineExample({
                title: headingLevel,
                renderCallback() {
                    return html`
                        <${ToniqHeading.assign({level: headingLevel})}>Some text</${ToniqHeading}>
                    `;
                },
            });
        });

        defineExample({
            title: 'can be restyled',
            styles: css`
                ${ToniqHeading}:first-of-type {
                    ${toniqFontStyles.h4Font};
                }
            `,
            renderCallback() {
                return html`
                    <${ToniqHeading.assign({level: ToniqHeadingLevel.H1})}>
                        This is an h1
                    </${ToniqHeading}>
                    <${ToniqHeading.assign({level: ToniqHeadingLevel.H1})}>
                        This is an h1
                    </${ToniqHeading}>
                `;
            },
        });
    },
});
