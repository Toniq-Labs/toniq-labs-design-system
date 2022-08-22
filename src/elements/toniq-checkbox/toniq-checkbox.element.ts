import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {CheckMark24Icon} from '../../icons/svgs/core-24/check-mark-24.icon';
import {interactionDuration, noUserSelect} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqCheckbox = defineToniqElement({
    tagName: 'toniq-checkbox',
    props: {
        text: '',
        checked: false,
    },
    events: {
        checkedChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
            transition: color ${interactionDuration}, background-color ${interactionDuration},
                opacity ${interactionDuration};
            border-radius: 8px;
        }

        button {
            ${removeNativeFormStyles};
            border-radius: 8px;
        }

        .wrapper {
            transition: inherit;
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            position: relative;
            outline: none;
        }

        .label {
            font: inherit;
            color: inherit;
            margin-left: 16px;
            ${noUserSelect};
            transition: inherit;
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

        ${createFocusStyles({mainSelector: '.wrapper:focus', elementBorderSize: 0})}

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
            <button
                class="wrapper ${props.checked ? 'checked' : ''}"
                ${listen('click', () => {
                    const checked = !props.checked;
                    setProps({checked});
                    dispatch(new events.checkedChange(checked));
                })}
                role="checkbox"
                aria-checked=${props.checked}
                class="wrapper"
            >
                <span class="checkbox ${props.checked ? 'checked' : ''}">
                    <${ToniqIcon}
                        class="check-mark ${props.checked ? '' : 'hidden'}"
                        ${assign(ToniqIcon.props.icon, CheckMark24Icon)}
                    ></${ToniqIcon}></span>
                <span class="label">${props.text}</span>
            </button>
        `;
    },
});
