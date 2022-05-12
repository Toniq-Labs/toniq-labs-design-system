import {css, defineElementEvent, defineFunctionalElement, html} from 'element-vir';

export const ToniqCheckbox = defineFunctionalElement({
    tagName: 'toniq-checkbox',
    props: {
        text: '',
        checked: false,
    },
    events: {
        change: defineElementEvent<boolean>(),
    },
    styles: css`
        .toniq-checkbox {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .toniq-checkbox:hover input[type='checkbox']:not(:checked) + .checkbox,
        .toniq-checkbox:hover input[checked='false'] + .checkbox {
            background-color: var(--toniq-checkbox-background-color-hover, #e0dfdb);
        }

        .toniq-checkbox:hover input[type='checkbox']:checked + .checkbox,
        .toniq-checkbox:hover input[checked='true'] + .checkbox {
            background-color: var(--toniq-checkbox-background-color-checked-hover, #02c58c);
        }

        .toniq-checkbox:hover input[type='checkbox']:not(:checked) + .checkbox + .label,
        .toniq-checkbox:hover input[checked='false'] + .checkbox + .label {
            color: var(--toniq-checkbox-label-color-hover, #303030);
        }

        .toniq-checkbox:hover input[type='checkbox']:checked + .checkbox + .label,
        .toniq-checkbox:hover input[checked='true'] + .checkbox + .label {
            color: var(--toniq-checkbox-label-color-checked-hover, #02c58c);
        }

        .label {
            font-family: var(--toniq-font, 'Rubik');
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: var(--toniq-secondary-interaction-text-color, black);
            margin-left: 16px;

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
            background-color: var(--toniq-checkbox-background-color-checked, #00d093);
            color: var(--toniq-primary-interaction-text-color, white);
        }

        input[type='checkbox']:checked + span + .label,
        input[checked='true'] + span + .label {
            color: var(--toniq-accent-interaction-text-color, #00d093);
        }

        .checkbox {
            display: inline-block;
            background-color: var(--toniq-checkbox-background-color, #f1f3f6);
            height: 24px;
            width: 24px;
            border-radius: 8px;
        }
    `,
    renderCallback: ({props, dispatch, events}) => {
        return html`
            <label class="toniq-checkbox">
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
                <span class="checkbox"></span>
                <span for=${props.text} class="label">${props.text}</span>
            </label>
        `;
    },
});
