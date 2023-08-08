import {classMap, css, defineElementEvent, html, listen} from 'element-vir';
import {noUserSelect, removeNativeFormStyles} from 'vira';
import {CheckMark24Icon} from '../../icons/svgs/core-24/check-mark-24.icon';
import {toniqDurations} from '../../styles/animation';
import {colorValueToVarCall} from '../../styles/colors';
import {toniqDisabledStyles} from '../../styles/disabled';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqCheckbox = defineToniqElement<{
    text?: string | undefined;
    disabled?: boolean | undefined;
    checked: boolean;
}>()({
    tagName: 'toniq-checkbox',
    events: {
        checkedChange: defineElementEvent<boolean>(),
    },
    hostClasses: {
        'toniq-checkbox-disabled': ({inputs}) => !!inputs.disabled,
    },
    cssVars: {
        'toniq-checkbox-unchecked-checkbox-color': String(
            colorValueToVarCall('accentSecondary', 'backgroundColor'),
        ),
        'toniq-checkbox-unchecked-label-color': String(
            colorValueToVarCall('pagePrimary', 'foregroundColor'),
        ),

        'toniq-checkbox-checked-checkbox-color': String(
            colorValueToVarCall('accentPrimary', 'backgroundColor'),
        ),
        'toniq-checkbox-checked-check-color': String(
            colorValueToVarCall('accentPrimary', 'foregroundColor'),
        ),
        'toniq-checkbox-checked-label-color': String(
            colorValueToVarCall('pageInteraction', 'foregroundColor'),
        ),
    },
    styles: ({cssVars, hostClasses}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
            transition: color ${toniqDurations.interaction},
                background-color ${toniqDurations.interaction},
                opacity ${toniqDurations.interaction};
            border-radius: 8px;
        }

        button {
            ${removeNativeFormStyles};
            cursor: pointer;
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
            color: ${cssVars['toniq-checkbox-unchecked-label-color'].value};
        }

        .checkbox.checked {
            background-color: ${cssVars['toniq-checkbox-checked-checkbox-color'].value};
            color: ${cssVars['toniq-checkbox-checked-check-color'].value};
        }

        .label.checked {
            color: ${cssVars['toniq-checkbox-checked-label-color'].value};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${cssVars['toniq-checkbox-unchecked-checkbox-color'].value};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${createFocusStyles({
            mainSelector: '.wrapper:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
        })}

        .check-mark {
            color: ${cssVars['toniq-checkbox-checked-check-color'].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${hostClasses['toniq-checkbox-disabled'].selector} {
            ${toniqDisabledStyles};
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        const iconTemplate = html`
            <span class="checkbox ${inputs.checked ? 'checked' : ''}">
                <${ToniqIcon.assign({icon: CheckMark24Icon})}
                    class="check-mark ${classMap({hidden: !inputs.checked})}"
                ></${ToniqIcon}>
            </span>
        `;

        const textTemplate = html`
            <slot
                class=${classMap({
                    label: true,
                    checked: inputs.checked,
                })}
            >
                <span
                    class=${classMap({
                        label: true,
                        checked: inputs.checked,
                    })}
                >
                    ${inputs.text}
                </span>
            </slot>
        `;

        return html`
            <button
                ?disabled=${inputs.disabled}
                class="wrapper ${inputs.checked ? 'checked' : ''}"
                ${listen('click', () => {
                    const checked = !inputs.checked;
                    dispatch(new events.checkedChange(checked));
                })}
                role="checkbox"
                aria-checked=${inputs.checked}
                class="wrapper"
            >
                ${iconTemplate} ${textTemplate}
            </button>
        `;
    },
});
