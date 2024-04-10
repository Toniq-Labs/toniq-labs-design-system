import {css, html, renderIf} from 'element-vir';
import {noNativeFormStyles, noUserSelect} from 'vira';
import {ToniqSvg} from '../../icons';
import {toniqAnimations, toniqDurations} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqDisabledStyles} from '../../styles/disabled';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const buttonBorderRadius = css`8px`;

export enum ToniqButtonVariantEnum {
    Default = 'default',
    Outline = 'outline',
    Secondary = 'secondary',
    TextOnly = 'text-only',
}

export enum ToniqButtonIconPlacement {
    Left = 'left',
    Right = 'right',
}

export enum ToniqButtonEffectsEnum {
    Pulse = 'pulse',
}

export const ToniqButton = defineToniqElement<{
    /** If text is not provided as an input, instead provide a child element. */
    text?: string | undefined;
    icon?: ToniqSvg | undefined;
    variant?: ToniqButtonVariantEnum | undefined;
    disabled?: boolean | undefined;
    effect?: ToniqButtonEffectsEnum;
    iconPlacement?: ToniqButtonIconPlacement;
}>()({
    tagName: 'toniq-button',
    hostClasses: {
        'toniq-button-secondary': ({inputs}) => inputs.variant === ToniqButtonVariantEnum.Secondary,
        'toniq-button-outline': ({inputs}) => inputs.variant === ToniqButtonVariantEnum.Outline,
        'toniq-button-text-only': ({inputs}) => inputs.variant === ToniqButtonVariantEnum.TextOnly,
        'toniq-button-disabled': ({inputs}) => !!inputs.disabled,
        'toniq-button-effect-pulse': ({inputs}) => inputs.effect === ToniqButtonEffectsEnum.Pulse,
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
            ${noNativeFormStyles};
            cursor: pointer;
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
            transition:
                color ${toniqDurations.interaction},
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

        ${hostClasses['toniq-button-text-only'].selector} button {
            color: inherit;
            background-color: transparent;
            border-color: transparent;
        }

        ${hostClasses['toniq-button-effect-pulse'].selector} button {
            animation: ${toniqAnimations.buttonPulse.animationName};
            animation-iteration-count: infinite;
            animation-duration: ${toniqDurations.pulse};
            animation-timing-function: ease-in-out;
        }

        :host(.${hostClasses['toniq-button-text-only'].name}:hover) button {
            filter: brightness(85%);
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
        button .text-template + .icon-template {
            margin-left: 8px;
        }

        ${toniqAnimations.buttonPulse.keyFrames}
    `,
    renderCallback({inputs}) {
        const iconPlacement = inputs.iconPlacement ?? ToniqButtonIconPlacement.Left;
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

        const leftIcon = renderIf(iconPlacement === ToniqButtonIconPlacement.Left, iconTemplate);
        const rightIcon = renderIf(iconPlacement === ToniqButtonIconPlacement.Right, iconTemplate);

        return html`
            <button ?disabled=${inputs.disabled}>
                <slot>${leftIcon} ${textTemplate} ${rightIcon}</slot>
            </button>
        `;
    },
});
