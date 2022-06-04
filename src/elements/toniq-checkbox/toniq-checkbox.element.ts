import {randomString} from 'augment-vir';
import {assign, css, defineElementEvent, html} from 'element-vir';
import {CheckMark24Icon} from '../../icons/svgs/core-24/checkmark-24.icon';
import {interactionDuration, noUserSelect} from '../../styles';
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
            transition: ${interactionDuration};
        }

        .toniq-checkbox {
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            cursor: pointer;
        }

        label {
            transition: inherit;
        }

        .label {
            font: inherit;
            color: inherit;
            margin-left: 16px;
            ${noUserSelect};
            transition: inherit;
        }

        input {
            display: none;
        }

        .checkbox.checked {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .checkbox.checked ~ .label {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${toniqColors.accentSecondary.backgroundColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
        }

        .check-mark {
            color: ${toniqColors.accentPrimary.foregroundColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,
    renderCallback: ({props, dispatch, events, setProps}) => {
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
                <span class="checkbox ${props.checked ? 'checked' : ''}">
                    <${ToniqIcon}
                        class="check-mark ${props.checked ? '' : 'hidden'}"
                        ${assign(ToniqIcon.props.icon, CheckMark24Icon)}
                    ></${ToniqIcon}></span>
                <span class="label">${props.text}</span>
            </label>
        `;
    },
});
