import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    ElementBookPage,
    ElementBookPageExample,
    createExample,
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

function createHyperlinkExamples(classList: string) {
    return [
        createExample({
            title: 'text hyperlink',
            render() {
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
    ensureType<Record<string, ElementBookPageExample<any>[]>>({
        [ToniqHyperlink.tagName]: createHyperlinkExamples(''),
        [ToniqHyperlink.hostClasses['with-hover-styles']]: createHyperlinkExamples(
            ToniqHyperlink.hostClasses['with-hover-styles'],
        ),
    }),
    (key, value) => {
        return defineElementBookPage({
            title: key,
            examples: value,
            parent: toniqHyperlinkBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqHyperlinkBookEntries = [
    toniqHyperlinkBookChapter,
    ...Object.values(toniqHyperlinkBookPages),
];
