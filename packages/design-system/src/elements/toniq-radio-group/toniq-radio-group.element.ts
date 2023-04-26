import {randomString} from '@augment-vir/browser';
import {classMap, css, defineElementEvent, html, listen} from 'element-vir';
import {removeNativeFormStyles} from '../../styles';
import {toniqDurations} from '../../styles/animation';
import {colorValueToVarCall} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';

export type ToniqRadioGroupEntry = {
    value: string;
    /**
     * The label text to show the user. This is optional and if it is not provided then the value
     * property will be used instead.
     */
    label?: string | undefined;
    disabled?: boolean | undefined;
};

export const ToniqRadioGroup = defineToniqElement<{
    entries: ReadonlyArray<ToniqRadioGroupEntry>;
    value: string;
    groupName?: string | undefined;
}>()({
    tagName: 'toniq-radio-group',
    stateInit: {
        /** This will be fill in in the init callback. */
        randomGroupName: '',
    },
    events: {
        valueChange: defineElementEvent<string>(),
    },
    cssVars: {
        uncheckedRadioColor: String(colorValueToVarCall('pagePrimary', 'foregroundColor')),
        uncheckedLabelColor: String(colorValueToVarCall('pagePrimary', 'foregroundColor')),

        checkedRadioColor: String(colorValueToVarCall('accentPrimary', 'backgroundColor')),
        checkedLabelColor: String(colorValueToVarCall('pageInteraction', 'foregroundColor')),

        disabledColor: String(colorValueToVarCall('pageSecondary', 'foregroundColor')),
    },
    styles: ({cssVarValues}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
            transition: color ${toniqDurations.interaction},
                background-color ${toniqDurations.interaction},
                opacity ${toniqDurations.interaction};
            flex-direction: column;
            gap: 24px;
            text-align: left;
        }

        .wrapper,
        input {
            cursor: pointer;
        }

        .label {
            text-align: inherit;
        }

        .wrapper {
            color: ${cssVarValues.uncheckedLabelColor};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${cssVarValues.checkedRadioColor};
            outline: none;
            text-align: inherit;
        }

        button {
            ${removeNativeFormStyles}
        }

        input {
            visibility: hidden;
            position: absolute;
        }

        .wrapper::before {
            flex-shrink: 0;
            display: inline-block;
            position: relative;
            content: '';
            height: 18px;
            width: 18px;
            box-sizing: border-box;
            padding: 3px;
            margin-right: 8px;
            border: 2px solid ${cssVarValues.uncheckedRadioColor};
            border-radius: 50%;
            transition: ${toniqDurations.interaction};
            --color-stop: -10%;
            background-image: radial-gradient(
                ${cssVarValues.checkedRadioColor} var(--color-stop),
                rgba(255, 255, 255, 0) calc(var(--color-stop) + 15%)
            );
        }

        .wrapper:not(.disabled):hover::before {
            border-color: inherit;
            opacity: 0.5;
        }

        .wrapper:not(.disabled):active::before {
            border-color: inherit;
            opacity: 1;
        }

        .wrapper:not(.disabled).checked::before {
            --color-stop: 35%;
            border-color: inherit;
        }

        ${createFocusStyles({
            mainSelector: '.wrapper:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
        })}

        .wrapper.checked {
            color: ${cssVarValues.checkedLabelColor};
        }

        .wrapper.disabled {
            color: ${cssVarValues.disabledColor};
            cursor: not-allowed;
        }

        .wrapper.disabled::before {
            border-color: ${cssVarValues.disabledColor};
        }
    `,
    initCallback: ({updateState}) => {
        updateState({
            randomGroupName: randomString(),
        });
    },
    renderCallback: ({inputs, dispatch, events, state}) => {
        const filteredEntries = filterEntries(inputs.entries);

        return filteredEntries.map((entry) => {
            return createSingleRadioTemplate(
                inputs.groupName || state.randomGroupName,
                inputs.value,
                entry,
                () => {
                    dispatch(new events.valueChange(entry.value));
                },
            );
        });
    },
});

function filterEntries(entries: ReadonlyArray<ToniqRadioGroupEntry>): ToniqRadioGroupEntry[] {
    const mappedEntries = Object.fromEntries(
        entries.map((entry) => {
            return [
                entry.value,
                entry,
            ];
        }),
    );

    const uniqueValues = Object.values(mappedEntries);

    if (uniqueValues.length !== entries.length) {
        console.error(`${ToniqRadioGroup.tagName} was given duplicate entry values.`);
    }

    return Object.values(mappedEntries);
}

function createSingleRadioTemplate(
    groupName: string,
    currentValue: string,
    entry: ToniqRadioGroupEntry,
    changeCallback: () => void,
) {
    const shouldBeChecked = currentValue === entry.value;

    const labelTemplate = html`
        <slot name=${entry.value} class="label">
            <span class="label">${entry.label || entry.value}</span>
        </slot>
    `;

    return html`
        <button
            ?disabled=${entry.disabled}
            tabindex="0"
            class=${classMap({
                disabled: !!entry.disabled,
                checked: shouldBeChecked && !entry.disabled,
                wrapper: true,
            })}
            ${listen('click', () => {
                changeCallback();
            })}
        >
            <input
                ${listen('input', () => {
                    changeCallback();
                })}
                type="radio"
                name=${groupName}
                ?checked=${shouldBeChecked}
            />
            ${labelTemplate}
        </button>
    `;
}
