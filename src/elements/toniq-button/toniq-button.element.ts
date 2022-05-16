import {css, html} from 'element-vir';
import {defineToniqElement} from '../define-toniq-element';

export enum ToniqButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const ToniqButton = defineToniqElement({
    tagName: 'toniq-button',
    props: {
        text: '',
        variant: ToniqButtonVariant.Primary,
    },
    styles: css`
        :host {
            font-family: var(--toniq-font, 'Rubik');
        }

        button {
            font-family: inherit;
            border: 0;
            cursor: pointer;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            -webkit-tap-highlight-color: transparent;

            border-radius: 8px;
        }

        button {
            background-color: var(--toniq-primary-interaction-background-color, #00d093);
            padding: 12px;
            color: var(--toniq-primary-interaction-text-color, white);
        }

        button.variant-secondary {
            background-color: var(--toniq-secondary-interaction-background-color, #f1f3f6);
            color: var(--toniq-secondary-interaction-text-color, black);
        }
    `,
    renderCallback: ({props}) => {
        const buttonClasses = `variant-${props.variant}`;

        return html`
            <button class=${buttonClasses}><slot>${props.text}</slot></button>
        `;
    },
});
