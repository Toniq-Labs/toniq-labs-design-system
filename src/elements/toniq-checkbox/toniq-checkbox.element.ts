import {randomString} from 'augment-vir';
import {assign, css, defineElementEvent, html} from 'element-vir';
import {CheckMark24Icon} from '../../icons/svgs/core-24/checkmark-24.icon';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

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
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
        }

        .toniq-checkbox {
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            cursor: pointer;
        }

        .label {
            font: inherit;
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
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        input[type='checkbox']:checked ~ .label,
        input[checked='true'] ~ .label {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        .checkbox {
            font: inherit;
            display: inline-block;
            background-color: ${toniqColors.accentSecondary.backgroundColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
        }
    `,
    renderCallback: ({props, dispatch, events, setProps}) => {
        const checkMarkIcon = props.checked
            ? html`<${ToniqIcon} ${assign(ToniqIcon.props.icon, CheckMark24Icon)}></${ToniqIcon}>`
            : '';

        return html`
            <label for=${props.inputId} class="toniq-checkbox">
                <input
                    id=${props.inputId}
                    type="checkbox"
                    ?checked=${props.checked}
                    @change=${(event: Event) => {
                        const isChecked = (event.target as HTMLInputElement).checked;
                        setProps({checked: isChecked});
                        dispatch(new events.checkedChange(isChecked));
                    }}
                />
                <span class="checkbox">${checkMarkIcon}</span>
                <span class="label">${props.text}</span>
            </label>
        `;
    },
});
