import {randomString} from '@augment-vir/browser';
import {css, defineElementEvent, html, listen} from 'element-vir';
import {interactionDuration} from '../../styles';
import {colorValueToVarCall} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';

export type ToniqRadioGroupEntry = {
    value: string;
    label: string;
    disabled?: boolean;
};

export const ToniqRadioGroup = defineToniqElement<{
    entries: ReadonlyArray<ToniqRadioGroupEntry>;
    value: string;
    groupName?: string;
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
        uncheckedRadioColor: String(colorValueToVarCall('accentSecondary', 'backgroundColor')),
        uncheckedLabelColor: String(colorValueToVarCall('pagePrimary', 'foregroundColor')),

        checkedRadioColor: String(colorValueToVarCall('accentPrimary', 'backgroundColor')),
        checkedLabelColor: String(colorValueToVarCall('pageInteraction', 'foregroundColor')),
    },
    styles: ({cssVarValues, cssVarNames}) => css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            display: inline-flex;
            transition: color ${interactionDuration}, background-color ${interactionDuration},
                opacity ${interactionDuration};
            border-radius: 8px;
        }
    `,
    initCallback: ({updateState}) => {
        updateState({
            randomGroupName: randomString(),
        });
    },
    renderCallback: ({inputs, dispatch, events, state}) => {
        console.log({...inputs});

        return inputs.entries.map((entry) => {
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

function createSingleRadioTemplate(
    groupName: string,
    currentValue: string,
    entry: ToniqRadioGroupEntry,
    changeCallback: () => void,
) {
    const labelTemplate = html`
        <slot name=${entry.value} class="label">
            <span class="label">${entry.label}</span>
        </slot>
    `;

    return html`
        <label>
            <input
                ${listen('input', () => {
                    changeCallback();
                })}
                type="radio"
                name=${groupName}
                ?checked=${currentValue === entry.value}
            />
            ${labelTemplate}
        </label>
    `;
}
