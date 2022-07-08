import {assign, css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {interactionDuration} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeButtonStyles} from '../../styles/native-styles';
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
            ${noUserSelect};
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

        :host(:hover) {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryHover)};
        }

        :host(:active) {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryActive)};
        }

        button {
            ${removeNativeButtonStyles};
            display: inline-flex;
            vertical-align: middle;
        }

        :host(.toniq-button-secondary) {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        :host(.toniq-button-outline) {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            border-color: ${toniqColors.accentPrimary.backgroundColor};
        }

        :host(.toniq-button-secondary:hover),
        :host(.toniq-button-outline:hover) {
            border-color: ${toniqColors.accentPrimaryHover.backgroundColor};
        }

        :host(.toniq-button-secondary:active),
        :host(.toniq-button-outline:active) {
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
