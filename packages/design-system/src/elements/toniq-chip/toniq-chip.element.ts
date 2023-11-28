import {TemplateResult, css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export enum ToniqChipVariantEnum {
    Default = 'default',
    Secondary = 'secondary',
}

export const ToniqChip = defineToniqElement<{
    /** If no text is supplied, provide children elements. */
    text?: string | undefined;
    icon?: undefined | ToniqSvg;
    /** Defaults to ToniqChipStyle.Default. */
    variant?: ToniqChipVariantEnum | undefined;
}>()({
    tagName: 'toniq-chip',
    hostClasses: {
        'toniq-chip-secondary': ({inputs}) => inputs.variant === ToniqChipVariantEnum.Secondary,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${toniqFontStyles.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        ${hostClasses['toniq-chip-secondary'].selector} {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }
    `,
    renderCallback({inputs}) {
        const iconTemplate: TemplateResult | string = inputs.icon
            ? html`
                  <${ToniqIcon.assign({
                      icon: inputs.icon,
                  })}></${ToniqIcon}>
              `
            : '';
        return html`
            ${iconTemplate}
            <slot>${inputs.text}</slot>
        `;
    },
});
