import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {SetOptional} from 'type-fest';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqHyperlink, ToniqHyperlinkLinkTypeEnum} from './toniq-hyperlink.element';

export const toniqHyperlinkPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqHyperlink.tagName,
    elementExamplesCallback({defineExample}) {
        const exampleConfigs: ReadonlyArray<{
            title: string;
            inputs: SetOptional<typeof ToniqHyperlink.inputsType, 'url'>;
            descriptions?: string[] | undefined;
        }> = [
            {
                title: 'default',
                inputs: {linkType: ToniqHyperlinkLinkTypeEnum.ReplacePage},
            },
            {
                title: 'new tab',
                inputs: {linkType: ToniqHyperlinkLinkTypeEnum.NewTab},
            },
            {
                title: 'hover styles',
                inputs: {withHoverStyles: true, linkType: ToniqHyperlinkLinkTypeEnum.NewTab},
            },
            {
                title: 'route link',
                inputs: {linkType: ToniqHyperlinkLinkTypeEnum.RouteLink},
            },
            {
                title: 'link disabled',
                inputs: {linkType: ToniqHyperlinkLinkTypeEnum.Disabled},
            },
        ];

        exampleConfigs.forEach((exampleConfig) => {
            defineExample({
                title: exampleConfig.title,
                descriptionParagraphs: exampleConfig.descriptions,
                renderCallback() {
                    return html`
                        <${ToniqHyperlink.assign({
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
