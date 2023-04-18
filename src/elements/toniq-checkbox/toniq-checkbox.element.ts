import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {CheckMark24Icon} from '../../icons/svgs/core-24/check-mark-24.icon';
import {noUserSelect} from '../../styles';
import {colorValueToVarCall} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {toniqDurations} from '../../styles/animation';

export const ToniqCheckbox = defineToniqElement<{
    text?: string | undefined;
    checked: boolean;
}>()({
    tagName: 'toniq-checkbox',
    events: {
        checkedChange: defineElementEvent<boolean>(),
    },
    hostClasses: {},
    cssVars: {
        uncheckedCheckboxColor: String(colorValueToVarCall('accentSecondary', 'backgroundColor')),
        uncheckedLabelColor: String(colorValueToVarCall('pagePrimary', 'foregroundColor')),

        checkedCheckboxColor: String(colorValueToVarCall('accentPrimary', 'backgroundColor')),
        checkedCheckColor: String(colorValueToVarCall('accentPrimary', 'foregroundColor')),
        checkedLabelColor: String(colorValueToVarCall('pageInteraction', 'foregroundColor')),
    },
    styles: ({cssVarValues, cssVarNames}) => css`
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
            color: ${cssVarValues.uncheckedLabelColor};
        }

        .checkbox.checked {
            background-color: ${cssVarValues.checkedCheckboxColor};
            color: ${cssVarValues.checkedCheckColor};
        }

        .label.checked {
            color: ${cssVarValues.checkedLabelColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${cssVarValues.uncheckedCheckboxColor};
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
            color: ${cssVarValues.checkedCheckColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,
    renderCallback: ({inputs, dispatch, events}) => {
        const iconTemplate = html`
            <span class="checkbox ${inputs.checked ? 'checked' : ''}">
                <${ToniqIcon}
                    class="check-mark ${classMap({hidden: !inputs.checked})}"
                    ${assign(ToniqIcon, {icon: CheckMark24Icon})}
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
