import {css, defineElement, html} from 'element-vir';
import {ViraIconSvg} from 'vira';
import {CheckMark24Icon, Info24Icon, X24Icon} from '../../icons';
import {applyBorderAndBackground, toniqColors} from '../../styles';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export enum ToniqAlertVariantEnum {
    Danger = 'danger',
    Warning = 'warning',
    Success = 'success',
}

export const ToniqAlert = defineElement<{
    variant: ToniqAlertVariantEnum;
}>()({
    tagName: 'toniq-alert',
    hostClasses: {
        'toniq-alert-danger': ({inputs}) => inputs.variant === ToniqAlertVariantEnum.Danger,
        'toniq-alert-warning': ({inputs}) => inputs.variant === ToniqAlertVariantEnum.Warning,
        'toniq-alert-success': ({inputs}) => inputs.variant === ToniqAlertVariantEnum.Success,
    },
    styles: ({hostClasses}) => css`
        :host {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid;
            background: transparent;
            display: flex;
            gap: 8px;
        }

        ${hostClasses['toniq-alert-danger'].selector} {
            ${applyBorderAndBackground(toniqColors.alertDanger)}
        }
        ${hostClasses['toniq-alert-danger'].selector} ${ToniqIcon} {
            color: ${toniqColors.alertDanger.foregroundColor};
        }

        ${hostClasses['toniq-alert-warning'].selector} {
            ${applyBorderAndBackground(toniqColors.alertWarning)}
        }
        ${hostClasses['toniq-alert-warning'].selector} ${ToniqIcon} {
            color: ${toniqColors.alertWarning.foregroundColor};
        }

        ${hostClasses['toniq-alert-success'].selector} {
            ${applyBorderAndBackground(toniqColors.alertSuccess)}
        }
        ${hostClasses['toniq-alert-success'].selector} ${ToniqIcon} {
            color: ${toniqColors.alertSuccess.foregroundColor};
        }
    `,
    renderCallback({inputs}) {
        let icon: ViraIconSvg;

        switch (inputs.variant) {
            case ToniqAlertVariantEnum.Success:
                icon = CheckMark24Icon;
                break;
            case ToniqAlertVariantEnum.Warning:
                icon = Info24Icon;
                break;
            default:
                icon = X24Icon;
                break;
        }

        return html`
            <${ToniqIcon.assign({icon})}></${ToniqIcon}>
            <slot></slot>
        `;
    },
});
