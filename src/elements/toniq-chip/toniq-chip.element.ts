import {assign, css, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {ToniqSvg} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqChip = defineToniqElement<{
    text: string;
    icon?: undefined | ToniqSvg;
}>()({
    tagName: 'toniq-chip',
    styles: css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${toniqFontStyles.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(.toniq-chip-secondary) {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }
    `,
    renderCallback: ({inputs}) => {
        const iconTemplate: TemplateResult | string = inputs.icon
            ? html`<${ToniqIcon}
                ${assign(ToniqIcon, {
                    icon: inputs.icon,
                })}
            ></${ToniqIcon}>`
            : '';
        return html`
            <slot>${iconTemplate}${inputs.text}</slot>
        `;
    },
});
