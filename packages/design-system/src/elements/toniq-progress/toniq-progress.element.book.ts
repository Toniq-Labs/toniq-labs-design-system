import {defineBookPage} from 'element-book';
import {CSSResult, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqProgress} from './toniq-progress.element';

export const toniqProgressBookPage = defineBookPage({
    title: ToniqProgress.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        const examples: ReadonlyArray<
            Readonly<
                {
                    title: string;
                    styles?: CSSResult;
                } & typeof ToniqProgress.inputsType
            >
        > = [
            {
                title: 'halfway',
                percent: 50,
            },
            {
                title: 'nothing',
                percent: 0,
            },
            {
                title: 'complete',
                percent: 100,
            },
            {
                title: 'custom height',
                styles: css`
                ${ToniqProgress} {
                    height: 32px;
                }
                :`,
                percent: 75,
            },
            {
                title: 'custom width',
                styles: css`
                ${ToniqProgress} {
                    width: 200%;
                }
                :`,
                percent: 75,
            },
        ];

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: example.styles,
                renderCallback() {
                    return html`
                        <${ToniqProgress.assign({
                            percent: example.percent,
                        })}></${ToniqProgress}>
                    `;
                },
            });
        });
    },
});
