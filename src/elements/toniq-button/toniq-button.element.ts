import {css, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeButtonStyles} from '../../styles/native-styles';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';

export enum ToniqButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const buttonBorderRadius = css`8px`;

export const ToniqButton = defineToniqElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        variant: ToniqButtonVariant.Primary,
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
            border-radius: ${buttonBorderRadius};
            padding: 12px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            cursor: pointer;
        }

        :host(.variant-secondary) {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        :host([disabled]),
        :host([disabled]) button {
            cursor: auto;
        }

        button {
            ${removeNativeButtonStyles};
            display: inline-block;
            vertical-align: middle;
        }
    `,
    renderCallback: ({host, props}) => {
        const hostClasses = `variant-${props.variant}`;
        host.classList.add(hostClasses);

        return html`
            <button><slot>${props.text}</slot></button>
        `;
    },
});
