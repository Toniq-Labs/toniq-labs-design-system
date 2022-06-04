import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqToggleButton} from '../react-components';
import {ToniqToggleButton as NativeToniqToggleButton} from './toniq-toggle-button.element';

const toggleButtonStoryControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
    text: {
        table: {
            disable: true,
        },
    },
    active: {
        table: {
            disable: true,
        },
    },
    inputId: {
        table: {
            disable: true,
        },
    },
    activeInput: {
        name: 'Active',
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Toggle Button',
    component: ToniqToggleButton,
    argTypes: toggleButtonStoryControls,
    args: {
        textInput: 'Custom text here',
        activeInput: false,
    },
};

export default componentStoryMeta;

function handleChange(event: typeof NativeToniqToggleButton.events.activeChange) {
    action(event.type)(event);
}

export const mainStory = (
    controls: Record<keyof typeof toggleButtonStoryControls, string | boolean>,
) => {
    const customText = String(controls.textInput);
    const isActive = !!controls.activeInput;

    return (
        <>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Inactive by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Toggle Me" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Active by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Toggle Me" active />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text={customText} active={isActive} />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
