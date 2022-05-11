import {css, defineFunctionalElement, html} from 'element-vir';
export enum ToniqButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const ToniqButton = defineFunctionalElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        variant: ToniqButtonVariant.Primary,
        active: false,
    },
    styles: css`
        button {
            font-family: var(--toniq-font, 'Rubik');
            border: 0;
            cursor: pointer;
            font-weight: 700;
            font-size: 16px;
            -webkit-tap-highlight-color: transparent;

            border-radius: 8px;
        }

        button.type-default {
            background-color: var(--toniq-primary-interaction-background-color, #00d093);
            padding: 12px;
            color: var(--toniq-primary-interaction-text-color, white);
        }

        button.type-default.variant-secondary {
            background-color: var(--toniq-secondary-interaction-background-color, #f1f3f6);
            color: var(--toniq-secondary-interaction-text-color, black);
        }
    `,
    renderCallback: ({props}) => {
        const buttonClasses = `variant-${props.variant}`;

        return html`
            <button class=${buttonClasses}>${props.text}</button>
        `;
    },
});
