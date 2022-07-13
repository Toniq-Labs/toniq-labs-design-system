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
            display: inline-flex;
            vertical-align: middle;
            ${noUserSelect};
        }

        :host(:hover) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryHover)};
        }

        :host(:active) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimaryActive)};
        }

        button {
            ${removeNativeButtonStyles};
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

        :host(.toniq-button-text-only) button {
            background: none;
            color: #000000;
        }

        :host(.toniq-button-text-only[disabled]) button,
        :host(.toniq-button-text-only.selected) button {
            cursor: auto;
        }

        :host(.toniq-button-text-only:not(.selected):not([disabled]):hover) button {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)}
        }

        :host(.toniq-button-text-only.selected) button {
            background: none;
            color: #ffffff;
        }

        :host(.toniq-button-icon-only) button {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)}
            border-radius: ${buttonBorderRadius};
            margin: 0 8px;
            padding: 4px;
        }

        :host(.toniq-button-icon-only:not([disabled]):hover) button {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)}
        }

        :host(.toniq-button-icon-only[disabled]) button {
            cursor: auto;
            ${applyBackgroundAndForeground(toniqColors.accentTertiary)};
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
