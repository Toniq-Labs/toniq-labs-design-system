import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {ComponentProps} from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {createMultiElementState} from '../../storybook-helpers/multi-element-state';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox} from '../react-components';
import {ToniqCheckbox as NativeToniqCheckbox} from './toniq-checkbox.element';

const checkboxStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
    text: {
        table: {
            disable: true,
        },
    },
    checked: {
        table: {
            disable: true,
        },
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqCheckbox> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
    argTypes: checkboxStoryControls,
    args: {
        textInput: 'Custom text here',
    },
};

export default componentStoryMeta;

const checkboxStatesInit = {
    uncheckedByDefault: false,
    checkedByDefault: true,
    custom: true,
    htmlChild: true,
    customCssVars: true,
    smallText: true,
    longText: true,
} as const;

export const mainStory = (
    controls: Record<keyof typeof checkboxStoryControls, string | boolean>,
) => {
    const customText = String(controls.textInput);

    const [
        state,
        updateState,
        stateKeys,
    ] = createMultiElementState(checkboxStatesInit);

    function makeInputs(key: keyof typeof state) {
        const props: ComponentProps<typeof ToniqCheckbox> = {
            checked: state[key],
            onCheckedChange: (event) => {
                const update = {
                    key,
                    value: event.detail,
                };
                updateState(update);
                handleEventAsAction(event);
            },
        };

        return props;
    }

    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Unchecked by default
            </h3>
            <ToniqCheckbox {...makeInputs(stateKeys.uncheckedByDefault)} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox {...makeInputs(stateKeys.checkedByDefault)} text="Orange" />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqCheckbox
                {...makeInputs(stateKeys.custom)}
                checked={state[stateKeys.custom]}
                text={customText}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With HTML Child
            </h3>
            <ToniqCheckbox
                {...makeInputs(stateKeys.htmlChild)}
                checked={state[stateKeys.htmlChild]}
            >
                <span>{customText}</span>
            </ToniqCheckbox>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With Custom CSS Vars
            </h3>
            <ToniqCheckbox
                {...makeInputs(stateKeys.customCssVars)}
                style={{
                    [String(NativeToniqCheckbox.cssVarNames.uncheckedCheckboxColor)]: 'red',
                    [String(NativeToniqCheckbox.cssVarNames.uncheckedLabelColor)]: 'orange',
                    [String(NativeToniqCheckbox.cssVarNames.checkedCheckboxColor)]: 'green',
                    [String(NativeToniqCheckbox.cssVarNames.checkedCheckColor)]: 'blue',
                    [String(NativeToniqCheckbox.cssVarNames.checkedLabelColor)]: 'purple',
                }}
                checked={state[stateKeys.customCssVars]}
            >
                <span>{customText}</span>
            </ToniqCheckbox>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Multiple Checkboxes (Text longer than container)
            </h3>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    maxWidth: 250,
                }}
            >
                <ToniqCheckbox {...makeInputs(stateKeys.smallText)} text="Text" />
                <ToniqCheckbox
                    {...makeInputs(stateKeys.longText)}
                    text="Text Longer than container"
                />
            </div>
        </article>
    );
};
mainStory.storyName = 'Toniq Checkbox';
