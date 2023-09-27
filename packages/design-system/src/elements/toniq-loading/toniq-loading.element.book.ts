import {defineBookPage} from 'element-book';
import {CSSResult, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqLoading, ToniqLoadingSizeEnum} from './toniq-loading.element';

export const toniqLoadingBookPage = defineBookPage({
    title: ToniqLoading.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        const examples: ReadonlyArray<{
            inputs: typeof ToniqLoading.inputsType;
            title: string;
            styles?: CSSResult;
        }> = [
            {
                title: 'small',
                inputs: {size: ToniqLoadingSizeEnum.Small},
            },
            {
                title: 'large',
                inputs: {size: ToniqLoadingSizeEnum.Large},
            },
            {
                title: 'whole page',
                inputs: {size: ToniqLoadingSizeEnum.WholePage},
                styles: css`
                    :host {
                        width: 500px;
                    }
                `,
            },
        ];

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: example.styles ?? css``,
                renderCallback() {
                    return html`
                        <${ToniqLoading.assign(example.inputs)}></${ToniqLoading}>
                    `;
                },
            });
        });
    },
});
