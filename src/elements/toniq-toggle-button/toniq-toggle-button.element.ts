import {assign, css, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {interactionDuration} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeButtonStyles} from '../../styles/native-styles';
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
            ${removeNativeButtonStyles};
        }

        .wrapper {
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            transition: color ${interactionDuration}, background-color ${interactionDuration};
        }

        .text-wrapper {
            margin: 4px 12px;
            margin-left: 0;
        }

        .icon-wrapper {
            margin-left: 12px;
        }

        .wrapper.active,
        :host(:hover) .wrapper {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(.toniq-toggle-button-text-only) .wrapper {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) .wrapper.active,
        :host(.toniq-toggle-button-text-only:hover) .wrapper {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) .text-wrapper {
            margin-right: 8px;
        }
        :host(.toniq-toggle-button-text-only) .icon-wrapper {
            margin-left: 8px;
        }

        ${ToniqIcon} {
            margin-right: 8px;
        }
    `,
    renderCallback: ({props}) => {
        const iconTemplate = props.icon
            ? html`
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, props.icon)}
                ></${ToniqIcon}>
            `
            : '';

        return html`
            <button
                class="wrapper ${props.active ? 'active' : ''}"
                role="checkbox"
                aria-checked=${props.active}
                class="wrapper"
            >
                <span class="icon-wrapper">${iconTemplate}</span>
                <span class="text-wrapper">${props.text}</span>
            </button>
        `;
    },
});
