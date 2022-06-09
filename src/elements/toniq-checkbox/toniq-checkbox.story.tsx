import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';
import {ToniqCheckbox as NativeToniqCheckbox} from './toniq-checkbox.element';

const checkboxStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    text: {
        table: {
            disable: true,
        },
    },
    checked: {
        name: 'Checked',
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
    argTypes: checkboxStoryControls,
    args: {
        textInput: 'Custom text here',
        checked: false,
    },
};

export default componentStoryMeta;

function handleCheckedChange(event: typeof NativeToniqCheckbox.events.checkedChange) {
    action(event.type)(event);
}

export const mainStory = (
    controls: Record<keyof typeof checkboxStoryControls, string | boolean>,
) => {
    const customText = String(controls.textInput);
    const isChecked = !!controls.checked;

    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Unchecked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleCheckedChange} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleCheckedChange} text="Orange" checked />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqCheckbox
                onCheckedChange={handleCheckedChange}
                text={customText}
                checked={isChecked}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Checkbox';
