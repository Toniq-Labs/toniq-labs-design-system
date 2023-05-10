import {assign, css, html} from 'element-vir';
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

export const ToniqButton = defineToniqElement<{
    // if text is not given, provide a child element
    text?: string;
    icon?: undefined | ToniqSvg;
}>()({
    tagName: 'toniq-button',
    hostClasses: {
        secondary: false,
        outline: false,
        disabled: false,
    },
    styles: ({hostClassSelectors, hostClassNames}) => css`
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

        ${hostClassSelectors.secondary} button {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        ${hostClassSelectors.outline} button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border-color: ${toniqColors.accentPrimary.backgroundColor};
        }

        :host(.${hostClassNames.disabled}) {
            ${toniqDisabledStyles};
        }

        :host(.${hostClassNames.secondary}:hover) button,
        :host(.${hostClassNames.outline}:hover) button {
            border-color: ${toniqColors.accentPrimaryHover.backgroundColor};
        }

        :host(.${hostClassNames.secondary}:active) button,
        :host(.${hostClassNames.outline}:active) button {
            border-color: ${toniqColors.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({inputs}) => {
        const iconTemplate = inputs.icon
            ? html`
                  <${ToniqIcon}
                      class="icon-template"
                      ${assign(ToniqIcon, {
                          icon: inputs.icon,
                      })}
                  ></${ToniqIcon}>
              `
            : '';
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : '';

        return html`
            <button>
                <slot>${iconTemplate} ${textTemplate}</slot>
            </button>
        `;
    },
});
