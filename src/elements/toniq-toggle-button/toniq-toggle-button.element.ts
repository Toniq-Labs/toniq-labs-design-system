import {assign, css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {interactionDuration} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqToggleButton = defineToniqElement<{
    text?: string | undefined;
    toggled: boolean;
    icon?: ToniqSvg | undefined;
}>()({
    tagName: 'toniq-toggle-button',
    hostClasses: {
        textOnly: false,
    },
    styles: ({hostClassNames, hostClassSelectors}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${removeNativeFormStyles};
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
            transition: color ${interactionDuration}, background-color ${interactionDuration};
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

        ${hostClassSelectors.textOnly} button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${hostClassSelectors.textOnly} button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
            border-color: ${toniqColors.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${hostClassNames.textOnly}:hover) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionHover)};
        }
        :host(.${hostClassNames.textOnly}:hover) button {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }
        :host(.${hostClassNames.textOnly}:active) button.toggled {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionActive)};
        }
        ${hostClassSelectors.textOnly} button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
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
            <button
                class="${inputs.toggled ? 'toggled' : ''}"
                role="checkbox"
                aria-checked=${inputs.toggled}
            >
                ${iconTemplate} ${textTemplate}
            </button>
        `;
    },
});
