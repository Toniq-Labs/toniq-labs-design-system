import {TemplateResult, css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export enum ToniqChipVariantEnum {
    Default = 'default',
    Secondary = 'secondary',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
    Outline = 'outline',
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
        'toniq-chip-success': ({inputs}) => inputs.variant === ToniqChipVariantEnum.Success,
        'toniq-chip-warning': ({inputs}) => inputs.variant === ToniqChipVariantEnum.Warning,
        'toniq-chip-danger': ({inputs}) => inputs.variant === ToniqChipVariantEnum.Danger,
        'toniq-chip-outline': ({inputs}) => inputs.variant === ToniqChipVariantEnum.Outline,
    },
    options: {
        ignoreUnsetInputs: true,
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

        ${hostClasses['toniq-chip-warning'].selector} {
            ${applyBackgroundAndForeground(toniqColors.colorWarning)};
        }

        ${hostClasses['toniq-chip-danger'].selector} {
            ${applyBackgroundAndForeground(toniqColors.colorDanger)};
        }

        ${hostClasses['toniq-chip-success'].selector} {
            ${applyBackgroundAndForeground(toniqColors.colorSuccess)};
        }

        ${hostClasses['toniq-chip-outline'].selector} {
            box-sizing: border-box;
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border: 2px solid ${toniqColors.accentPrimary.backgroundColor};
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
