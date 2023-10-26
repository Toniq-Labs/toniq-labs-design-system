import {css, html} from 'element-vir';
import {noNativeFormStyles, noUserSelect} from 'vira';
import {ToniqSvg} from '../../icons';
import {toniqDurations} from '../../styles/animation';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqDisabledStyles} from '../../styles/disabled';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export enum ToniqToggleButtonStyleEnum {
    Default = 'default',
    TextOnly = 'text-only',
}

export const ToniqToggleButton = defineToniqElement<{
    text?: string | undefined;
    toggled: boolean;
    icon?: ToniqSvg | undefined;
    disabled?: boolean | undefined;
    style?: ToniqToggleButtonStyleEnum;
}>()({
    tagName: 'toniq-toggle-button',
    hostClasses: {
        'toniq-toggle-button-text-only': ({inputs}) =>
            inputs.style === ToniqToggleButtonStyleEnum.TextOnly,
        'toniq-toggle-button-disabled': ({inputs}) => !!inputs.disabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${noNativeFormStyles};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            transition:
                color ${toniqDurations.interaction},
                background-color ${toniqDurations.interaction};
        }

        ${createFocusStyles({
            mainSelector: 'button:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
        })}

        button.toggled {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(:hover) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryActive)};
        }

        ${hostClasses['toniq-toggle-button-text-only'].selector} button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${hostClasses['toniq-toggle-button-text-only'].selector} button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
            border-color: ${toniqColors.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${hostClasses['toniq-toggle-button-text-only'].name}:hover) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionHover)};
        }
        :host(.${hostClasses['toniq-toggle-button-text-only'].name}:hover) button {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }
        :host(.${hostClasses['toniq-toggle-button-text-only'].name}:active) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionActive)};
        }
        ${hostClasses['toniq-toggle-button-text-only'].selector} button {
            padding: 0 8px;
        }

        ${hostClasses['toniq-toggle-button-disabled'].selector} {
            ${toniqDisabledStyles};
        }

        .icon-template + .text-template {
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
            <button
                class="${inputs.toggled ? 'toggled' : ''}"
                role="checkbox"
                ?disabled=${inputs.disabled}
                aria-checked=${inputs.toggled}
            >
                ${iconTemplate} ${textTemplate}
            </button>
        `;
    },
});
