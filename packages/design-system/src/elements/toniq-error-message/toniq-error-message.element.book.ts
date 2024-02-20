import {defineBookPage} from 'element-book';
import {HtmlInterpolation, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqErrorMessage} from './toniq-error-message.element';

const examples: ReadonlyArray<Readonly<{title: string; content: HtmlInterpolation}>> = [
    {
        title: 'empty',
        content: '',
    },
    {
        title: 'with text',
        content: 'Error: there was an error',
    },
];

export const toniqErrorMessageBookPage = defineBookPage({
    title: ToniqErrorMessage.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                renderCallback() {
                    return html`
                        <${ToniqErrorMessage}>${example.content}</${ToniqErrorMessage}>
                    `;
                },
            });
        });
    },
});
