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

function createHyperlinkExamples(
    defineExample: DefineExampleCallback<{}>,
    overrideInputs: Partial<(typeof ToniqHyperlink)['inputsType']>,
) {
    return [
        defineExample({
            title: 'text hyperlink',
            renderCallback() {
                return html`
                    <${ToniqHyperlink}
                        ${assign(ToniqHyperlink, {
                            newTab: true,
                            url: 'https://toniqlabs.com',
                            ...overrideInputs,
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
    ensureType<Record<string, Partial<(typeof ToniqHyperlink)['inputsType']>>>({
        [ToniqHyperlink.tagName]: {},
        'with hover styles': {
            withHoverStyles: true,
        },
        'as a route link': {
            treatAsRouteChange: true,
        },
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
