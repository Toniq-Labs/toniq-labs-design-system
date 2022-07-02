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
            display: inline-block;
            vertical-align: middle;
            ${noUserSelect};
        }

        button {
            ${removeNativeButtonStyles};
            border-radius: ${buttonBorderRadius};
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            padding: 12px;
        }

        button.variant-secondary {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }
    `,
    renderCallback: ({props}) => {
        const buttonClasses = `variant-${props.variant}`;

        return html`
            <button class=${buttonClasses}><slot>${props.text}</slot></button>
        `;
    },
});
