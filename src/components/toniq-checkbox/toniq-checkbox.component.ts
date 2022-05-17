import {randomString} from 'augment-vir';
import {css, defineElementEvent, defineFunctionalElement, html} from 'element-vir';

export const ToniqCheckbox = defineFunctionalElement({
    initCallback: ({setProps}) => {
        setProps({inputId: randomString()});
    },
    tagName: 'toniq-checkbox',
    props: {
        text: '',
        checked: false,
        inputId: '',
    },
    events: {
        checkedChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            font-family: var(--toniq-font, 'Rubik');
            display: inline-flex;
        }

        .toniq-checkbox {
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            cursor: pointer;
        }

        :host:hover input[type='checkbox']:not(:checked) + .checkbox,
        :host:hover input[checked='false'] + .checkbox {
            background-color: var(--toniq-checkbox-background-color-hover, #e0dfdb);
        }

        :host:hover input[type='checkbox']:checked + .checkbox,
        .toniq-checkbox:hover input[checked='true'] + .checkbox {
            background-color: var(--toniq-checkbox-background-color-checked-hover, #02c58c);
        }

        :host:hover input[type='checkbox']:not(:checked) ~ .label,
        :host:hover input[checked='false'] ~ .label {
            color: var(--toniq-checkbox-label-color-hover, #303030);
        }

        .:hos:hover input[type='checkbox']:checked + .checkbox + .label,
        :host:hover input[checked='true'] ~ .label {
            color: var(--toniq-checkbox-label-color-checked-hover, #02c58c);
        }

        .label {
            font-family: inherit;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: var(--toniq-secondary-interaction-text-color, black);
            margin-left: 16px;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
        }

        input[type='checkbox'] {
            display: none;
        }

        input[type='checkbox']:checked + .checkbox,
        input[checked='true'] + .checkbox {
            background-color: var(--toniq-checkbox-background-color-checked, #00d093);
            color: var(--toniq-primary-interaction-text-color, white);
        }

        input[type='checkbox']:checked ~ .label,
        input[checked='true'] ~ .label {
            color: var(--toniq-accent-interaction-text-color, #00d093);
        }

        .checkbox {
            font-family: inherit;
            display: inline-block;
            background-color: var(--toniq-checkbox-background-color, #f1f3f6);
            height: 24px;
            width: 24px;
            border-radius: 8px;
        }
    `,
    renderCallback: ({props, dispatch, events}) => {
        return html`
            <label for=${props.inputId} class="toniq-checkbox">
                <input
                    id=${props.inputId}
                    type="checkbox"
                    ?checked=${props.checked}
                    @change=${(event: Event) => {
                        dispatch(
                            new events.checkedChange((event.target as HTMLInputElement).checked),
                        );
                    }}
                />
                <span class="checkbox"></span>
                <span class="label">${props.text}</span>
            </label>
        `;
    },
});
