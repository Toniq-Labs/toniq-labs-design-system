import {defineBookPage} from 'element-book';
import {TemplateResult, assign, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {toniqColors} from '../../styles';
import {ToniqTooltip} from './toniq-tooltip.element';
import {ToniqWithTooltip} from './toniq-with-tooltip.element';

const toniqTooltipElementBookChapter = defineBookPage({
    title: 'Tooltip',
    parent: elementsBookPage,
});

const toniqWithTooltipBookPage = defineBookPage({
    parent: toniqTooltipElementBookChapter,
    title: ToniqWithTooltip.tagName,
    elementExamplesCallback({defineExample}) {
        function defineTooltipExample({
            title,
            tooltipContent,
            forceShow,
        }: {
            title: string;
            tooltipContent: string | TemplateResult;
            forceShow?: boolean;
        }) {
            defineExample({
                title,
                styles: css`
                    div {
                        padding: 16px;
                        display: block;
                        border: 2px solid ${toniqColors.divider.foregroundColor};
                        border-radius: 4px;
                    }

                    :host {
                        display: block;
                        padding-right: 100px;
                        padding-bottom: 100px;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqWithTooltip}
                            ${assign(ToniqWithTooltip, {tooltipContent, forceShow})}
                        >
                            <div>Hover me!</div>
                        </${ToniqWithTooltip}>
                    `;
                },
            });
        }

        defineTooltipExample({
            title: 'default',
            tooltipContent: 'This is a tooltip!',
        });
        defineTooltipExample({
            title: 'tooltip forced on',
            tooltipContent: 'This is a tooltip!',
            forceShow: true,
        });
        defineTooltipExample({
            title: 'with template content',
            tooltipContent: html`
                <p>a paragraph element</p>
                <p>another one</p>
            `,
            forceShow: true,
        });
        defineTooltipExample({
            title: 'long tooltip',
            tooltipContent:
                "This tooltip is really really long! You probably shouldn't ever have a tooltip this long.",
            forceShow: true,
        });
    },
});

const toniqTooltipBookPage = defineBookPage({
    parent: toniqTooltipElementBookChapter,
    title: ToniqTooltip.tagName,
    descriptionParagraphs: [
        `This element should almost never be used alone. You should instead use <${ToniqWithTooltip.tagName}>, which in turn uses this element.`,
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'standalone tooltip',
            renderCallback() {
                return html`
                    <${ToniqTooltip}>This is a tooltip.</${ToniqTooltip}>
                `;
            },
        });
    },
});

export const toniqTooltipElementBookEntries = [
    toniqTooltipElementBookChapter,
    toniqWithTooltipBookPage,
    toniqTooltipBookPage,
];
