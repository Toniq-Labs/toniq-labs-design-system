import {css, defineFunctionalElement, html} from 'element-vir';

export enum ToniqButtonType {
    Default = 'default',
    Toggle = 'toggle',
}

export enum ToniqButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const ToniqButton = defineFunctionalElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        type: ToniqButtonType.Default,
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

        button.type-toggle {
            background-color: var(--toniq-secondary-interaction-background-color, #f1f3f6);
            color: var(--toniq-secondary-interaction-text-color, black);
            padding: 4px 12px;
        }

        button.type-toggle.active {
            background-color: var(--toniq-primary-interaction-background-color, #00d093);
            color: var(--toniq-primary-interaction-text-color, white);
        }
    `,
    renderCallback: ({props}) => {
        const buttonActiveClass = props.active ? 'active' : '';

        const buttonClasses = `type-${props.type} variant-${props.variant} ${buttonActiveClass}`;

        return html`
            <button class=${buttonClasses}>${props.text}</button>
        `;
    },
});
