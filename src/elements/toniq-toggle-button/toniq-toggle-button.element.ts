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

export const ToniqToggleButton = defineToniqElement({
    tagName: 'toniq-toggle-button',
    props: {
        text: '',
        active: false,
        icon: undefined as undefined | Readonly<ToniqSvg>,
    },
    styles: css`
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

        ${createFocusStyles({mainSelector: 'button:focus', elementBorderSize: 0})}

        button.active {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(:hover) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(:hover) button.active {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryHover)};
        }

        :host(:active) button.active {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryActive)};
        }

        :host(.toniq-toggle-button-text-only) button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) button.active {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only:hover) button.active {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionHover)};
        }
        :host(.toniq-toggle-button-text-only:hover) button {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }
        :host(.toniq-toggle-button-text-only:active) button.active {
            ${applyBackgroundAndForeground(toniqColors.pageInteractionActive)};
        }
        :host(.toniq-toggle-button-text-only) button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({props}) => {
        const iconTemplate = props.icon
            ? html`
                <${ToniqIcon}
                class="icon-template"
                    ${assign(ToniqIcon.props.icon, props.icon)}
                ></${ToniqIcon}>
            `
            : '';
        const textTemplate = props.text
            ? html`
                  <span class="text-template">${props.text}</span>
              `
            : '';

        return html`
            <button
                class="${props.active ? 'active' : ''}"
                role="checkbox"
                aria-checked=${props.active}
            >
                ${iconTemplate} ${textTemplate}
            </button>
        `;
    },
});
