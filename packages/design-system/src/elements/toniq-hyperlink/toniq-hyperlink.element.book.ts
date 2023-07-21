import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqHyperlink} from './toniq-hyperlink.element';

export const toniqHyperlinkPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqHyperlink.tagName,
    elementExamplesCallback({defineExample}) {
        const exampleConfigs: ReadonlyArray<{
            title: string;
            inputs: Partial<typeof ToniqHyperlink.inputsType>;
            descriptions?: string[] | undefined;
        }> = [
            {
                title: 'default',
                inputs: {},
            },
            {
                title: 'hover styles',
                inputs: {withHoverStyles: true},
            },
            {
                title: 'route link',
                inputs: {treatAsRouteChange: true},
            },
        ];

        exampleConfigs.forEach((exampleConfig) => {
            defineExample({
                title: exampleConfig.title,
                descriptionParagraphs: exampleConfig.descriptions,
                renderCallback() {
                    return html`
                        <${ToniqHyperlink.assign({
                            newTab: true,
                            url: 'https://toniqlabs.com',
                            ...exampleConfig.inputs,
                        })}>
                            Toniq Labs Link
                        </${ToniqHyperlink}>
                    `;
                },
            });
        });
    },
});
