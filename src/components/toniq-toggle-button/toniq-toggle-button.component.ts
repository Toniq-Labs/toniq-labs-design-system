import {css, defineFunctionalElement, html} from 'element-vir';

export const ToniqToggleButton = defineFunctionalElement({
    tagName: 'toniq-toggle-button',
    props: {
        text: '',
        checked: false,
        onchange: (e: Event) => {},
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

        input[type='checkbox']:checked + span,
        input[checked='true'] + span {
            background-color: var(--toniq-primary-interaction-background-color, #00d093);
            color: var(--toniq-primary-interaction-text-color, white);
        }
    `,
    renderCallback: ({props, dispatch, events}) => {
        return html`
            <label>
                <input
                    id=${props.text}
                    type="checkbox"
                    ?checked=${props.checked}
                    @change=${props.onchange}
                />
                <span for=${props.text}>${props.text}</span>
            </label>
        `;
    },
});
