import {css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {toniqDurations} from '../../styles/animation';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqDisabledStyles} from '../../styles/disabled';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const buttonBorderRadius = css`8px`;

export enum ToniqButtonStyleEnum {
    Default = 'default',
    Outline = 'outline',
    Secondary = 'secondary',
}

export const ToniqButton = defineToniqElement<{
    // if text is not given, provide a child element
    text?: string;
    icon?: undefined | ToniqSvg;
    buttonStyle?: ToniqButtonStyleEnum | undefined;
    disabled?: boolean | undefined;
}>()({
    tagName: 'toniq-button',
    hostClasses: {
        'toniq-button-secondary': ({inputs}) =>
            inputs.buttonStyle === ToniqButtonStyleEnum.Secondary,
        'toniq-button-outline': ({inputs}) => inputs.buttonStyle === ToniqButtonStyleEnum.Outline,
        'toniq-button-disabled': ({inputs}) => !!inputs.disabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${noUserSelect};
        }

        :host(:hover) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryHover)};
        }

        :host(:active) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryActive)};
        }

        button {
            ${removeNativeFormStyles};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${buttonBorderRadius};
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            padding: 10px;
            transition: color ${toniqDurations.interaction},
                background-color ${toniqDurations.interaction},
                border-color ${toniqDurations.interaction};
        }

        ${createFocusStyles({
            mainSelector: 'button:focus:focus-visible:not(:active)',
            elementBorderSize: 2,
        })}

        ${hostClasses['toniq-button-secondary'].selector} button {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        ${hostClasses['toniq-button-outline'].selector} button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border-color: ${toniqColors.accentPrimary.backgroundColor};
        }

        ${hostClasses['toniq-button-disabled'].selector} {
            ${toniqDisabledStyles};
        }

        :host(.${hostClasses['toniq-button-secondary'].name}:hover) button,
        :host(.${hostClasses['toniq-button-outline'].name}:hover) button {
            border-color: ${toniqColors.accentPrimaryHover.backgroundColor};
        }

        :host(.${hostClasses['toniq-button-secondary'].name}:active) button,
        :host(.${hostClasses['toniq-button-outline'].name}:active) button {
            border-color: ${toniqColors.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback({inputs}) {
        const iconTemplate = inputs.icon
            ? html`
                  <${ToniqIcon.assign({
                      icon: inputs.icon,
                  })}
                      class="icon-template"
                  ></${ToniqIcon}>
              `
            : '';
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : '';

        return html`
            <button ?disabled=${inputs.disabled}>
                <slot>${iconTemplate} ${textTemplate}</slot>
            </button>
        `;
    },
});
