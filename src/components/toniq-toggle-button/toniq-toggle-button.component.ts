import {css, defineElementEvent, defineFunctionalElement, html} from 'element-vir';

export const ToniqToggleButton = defineFunctionalElement({
    tagName: 'toniq-toggle-button',
    props: {
        text: '',
        checked: false,
    },
    events: {
        change: defineElementEvent<boolean>(),
    },
    styles: css`
        span {
            font-family: var(--toniq-font, 'Rubik');
            border: 0;
            cursor: pointer;
            font-weight: 700;
            font-style: normal;
            line-height: 24px;
            font-size: 16px;
            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            background-color: var(--toniq-secondary-interaction-background-color, #f1f3f6);
            color: var(--toniq-secondary-interaction-text-color, black);
            padding: 4px 12px;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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
                    @change=${(e: Event) => {
                        dispatch(
                            new events.change((e.target as HTMLInputElement).checked as boolean),
                        );
                    }}
                />
                <span for=${props.text}>${props.text}</span>
            </label>
        `;
    },
});
