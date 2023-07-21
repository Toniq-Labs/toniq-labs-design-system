import {defineBookPage} from 'element-book';
import {CSSResult, HTMLTemplateResult, css, html, renderIf} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {InfoCircle16Icon} from '../../icons';
import {ToniqChip, ToniqChipStyleEnum} from './toniq-chip.element';

export const toniqChipBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqChip.tagName,
    elementExamplesCallback({defineExample}) {
        const subExampleConfigs: ReadonlyArray<{
            inputs: typeof ToniqChip.inputsType;
            template?: HTMLTemplateResult | undefined;
            customStyle?: CSSResult | undefined;
        }> = [
            {
                inputs: {
                    text: 'text',
                },
            },
            {
                inputs: {
                    text: 'text + icon',
                    icon: InfoCircle16Icon,
                },
            },
            {
                inputs: {
                    icon: InfoCircle16Icon,
                },
            },
            {
                inputs: {},
                template: html`
                    HTML child
                `,
            },
            {
                inputs: {
                    icon: InfoCircle16Icon,
                },
                template: html`
                    HTML child
                `,
            },
            {
                customStyle: css`
                    width: 150px;
                    height: 24px;
                `,
                inputs: {
                    text: 'custom size',
                },
            },
        ];

        const styleVariations: ReadonlyArray<{title: string; inputs: typeof ToniqChip.inputsType}> =
            [
                {
                    title: 'default',
                    inputs: {style: ToniqChipStyleEnum.Default},
                },
                {
                    title: 'secondary style',
                    inputs: {style: ToniqChipStyleEnum.Secondary},
                },
            ];

        styleVariations.forEach((styleVariation) => {
            defineExample({
                title: styleVariation.title,
                renderCallback() {
                    return subExampleConfigs.map((subExample) => {
                        // if this wraps incorrectly then the white space is considered the slot
                        // prettier-ignore
                        return html`
                        <${ToniqChip.assign({...styleVariation.inputs, ...subExample.inputs})}
                            style=${subExample.customStyle}
                        >${
                            renderIf(!!subExample.template, subExample.template)
                        }</${ToniqChip}>
                    `;
                    });
                },
            });
        });
    },
});
