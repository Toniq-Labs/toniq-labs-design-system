import {css, defineFunctionalElement, html} from 'element-vir';

export const ToniqToggleButton = defineFunctionalElement({
    tagName: 'toniq-toggle-button',
    props: {
        text: '',
    },
    styles: css`
        span {
            font-family: var(--toniq-font, 'Rubik');
            border: 0;
            cursor: pointer;
            font-weight: 700;
            font-size: 16px;
            -webkit-tap-highlight-color: transparent;

            border-radius: 8px;

            background-color: var(--toniq-secondary-interaction-background-color, #f1f3f6);
            color: var(--toniq-secondary-interaction-text-color, black);
            padding: 4px 12px;
        }

        input[type='checkbox'] {
            display: none;
        }

        input[type='checkbox']:checked + span {
            background-color: var(--toniq-primary-interaction-background-color, #00d093);
            color: var(--toniq-primary-interaction-text-color, white);
        }
    `,
    renderCallback: ({props}) => {
        return html`
            <label>
                <!-- Add @change event props -->
                <input type="checkbox" />
                <span>${props.text}</span>
            </label>
        `;
    },
});
