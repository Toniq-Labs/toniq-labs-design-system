import {randomString} from 'augment-vir';
import {css, defineElementEvent, html} from 'element-vir';
import {applyBackgroundAndForeground, colors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqCheckbox = defineToniqElement({
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

        .label {
            font-family: inherit;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: inherit;
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
            ${applyBackgroundAndForeground(colors.accentPrimary)};
        }

        input[type='checkbox']:checked ~ .label,
        input[checked='true'] ~ .label {
            color: ${colors.pageInteraction.foregroundColor};
        }

        .checkbox {
            font-family: inherit;
            display: inline-block;
            background-color: ${colors.accentSecondary.backgroundColor};
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
