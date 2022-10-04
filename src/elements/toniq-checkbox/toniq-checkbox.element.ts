import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {CheckMark24Icon} from '../../icons/svgs/core-24/check-mark-24.icon';
import {interactionDuration, noUserSelect} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqCheckbox = defineToniqElement<{
    text?: string | undefined;
    checked: boolean;
}>()({
    tagName: 'toniq-checkbox',
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
            align-items: start;
            position: relative;
            outline: none;
        }

        .label {
            font: inherit;
            color: inherit;
            ${noUserSelect};
            transition: inherit;
            text-align: start;
        }

        .checkbox.checked {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .checkbox.checked ~ *,
        .checkbox.checked ~ slot * {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${toniqColors.accentSecondary.backgroundColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
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
    renderCallback: ({inputs, dispatch, events}) => {
        console.log(inputs);
        const iconTemplate = html`<span class="checkbox ${inputs.checked ? 'checked' : ''}">
            <${ToniqIcon}
                class="check-mark ${inputs.checked ? '' : 'hidden'}"
                ${assign(ToniqIcon, {icon: CheckMark24Icon})}
            ></${ToniqIcon}></span>`;

        const textTemplate = inputs.text
            ? html`
                  <span class="label">${inputs.text}</span>
              `
            : '';

        return html`
            <button
                class="wrapper ${inputs.checked ? 'checked' : ''}"
                ${listen('click', () => {
                    const checked = !inputs.checked;
                    dispatch(new events.checkedChange(checked));
                })}
                role="checkbox"
                aria-checked=${inputs.checked}
                class="wrapper"
            >
                ${iconTemplate}
                <slot>${textTemplate}</slot>
            </button>
        `;
    },
});
