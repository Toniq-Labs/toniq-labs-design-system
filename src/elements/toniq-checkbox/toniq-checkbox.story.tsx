import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';

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
            <ToniqCheckbox onCheckedChange={handleEventAsAction} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleEventAsAction} text="Orange" checked />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqCheckbox
                onCheckedChange={handleEventAsAction}
                text={customText}
                checked={isChecked}
            />
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
                <ToniqCheckbox onCheckedChange={handleEventAsAction} text="Text" />
                <ToniqCheckbox
                    onCheckedChange={handleEventAsAction}
                    text="Text Longer than container"
                />
            </div>
        </article>
    );
};
mainStory.storyName = 'Toniq Checkbox';
