import {getEnumTypedValues} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
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
    },
});
