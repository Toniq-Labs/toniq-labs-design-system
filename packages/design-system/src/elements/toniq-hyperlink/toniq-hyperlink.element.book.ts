import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    DefineExampleCallback,
    ElementBookPage,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, html} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ToniqHyperlink} from './toniq-hyperlink.element';

const toniqHyperlinkBookChapter = defineElementBookChapter({
    title: 'Hyperlink',
    parent: elementsBookChapter,
});

function createHyperlinkExamples(defineExample: DefineExampleCallback<{}>, classList: string) {
    return [
        defineExample({
            title: 'text hyperlink',
            renderCallback() {
                return html`
                    <${ToniqHyperlink}
                        class=${classList}
                        ${assign(ToniqHyperlink, {
                            newTab: true,
                            url: 'https://toniqlabs.com',
                        })}
                    >
                        Toniq Labs Link
                    </${ToniqHyperlink}>
                `;
            },
        }),
    ];
}

const toniqHyperlinkBookPages = mapObjectValues(
    ensureType<Record<string, string>>({
        [ToniqHyperlink.tagName]: '',
        [ToniqHyperlink.hostClasses['with-hover-styles']]:
            ToniqHyperlink.hostClasses['with-hover-styles'],
    }),
    (pageTitle, className) => {
        return defineElementBookPage({
            title: pageTitle,
            defineExamplesCallback({defineExample}) {
                createHyperlinkExamples(defineExample, className);
            },
            parent: toniqHyperlinkBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqHyperlinkBookEntries = [
    toniqHyperlinkBookChapter,
    ...Object.values(toniqHyperlinkBookPages),
];
