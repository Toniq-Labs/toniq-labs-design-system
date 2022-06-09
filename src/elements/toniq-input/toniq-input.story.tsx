import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {ToniqInput} from '../react-components';

const inputStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    value: {
        table: {
            disable: true,
        },
    },
    placeholder: {
        table: {
            disable: true,
        },
    },
    label: {
        table: {
            disable: true,
        },
    },
    valueInput: {
        name: 'Value',
        control: 'text',
    },
    placeholderInput: {
        name: 'Placeholder',
        control: 'text',
    },
    labelInput: {
        name: 'Label',
        control: 'text',
    },
} as const);

const inputComponentStoryMeta: ComponentMeta<typeof ToniqInput> = {
    title: 'Elements/Toniq Input',
    component: ToniqInput,
    argTypes: inputStoryControls as ArgTypes,
    args: {
        valueInput: 'Custom text here',
        placeholderInput: '',
        labelInput: '',
    },
};

export default inputComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof inputStoryControls, string>) => {
    return (
        <article>
            <ToniqInput value="with value" />
            <ToniqInput placeholder="with placeholder" />
            <ToniqInput
                placeholder={controls.placeholderInput}
                value={controls.valueInput}
                label={controls.label}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Input';
