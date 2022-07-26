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

export const buttonBorderRadius = css`8px`;

export const ToniqButton = defineToniqElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        icon: undefined as undefined | ToniqSvg,
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
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
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            align-items: center;
            border-radius: ${buttonBorderRadius};
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            padding: 10px;
            transition: color ${interactionDuration}, background-color ${interactionDuration},
                border-color ${interactionDuration};
        }

        ${createFocusStyles('button:focus', 2)}

        :host(.toniq-button-secondary) button {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        :host(.toniq-button-outline) button {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border-color: ${toniqColors.accentPrimary.backgroundColor};
        }

        :host(.toniq-button-secondary:hover) button,
        :host(.toniq-button-outline:hover) button {
            border-color: ${toniqColors.accentPrimaryHover.backgroundColor};
        }

        :host(.toniq-button-secondary:active) button,
        :host(.toniq-button-outline:active) button {
            border-color: ${toniqColors.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({props}) => {
        const iconTemplate = props.icon
            ? html`<${ToniqIcon} class="icon-template" ${assign(
                  ToniqIcon.props.icon,
                  props.icon,
              )}></${ToniqIcon}>`
            : '';
        const textTemplate = props.text
            ? html`
                  <span class="text-template">${props.text}</span>
              `
            : '';

        return html`
            <button>
                <slot>${iconTemplate} ${textTemplate}</slot>
            </button>
        `;
    },
});
