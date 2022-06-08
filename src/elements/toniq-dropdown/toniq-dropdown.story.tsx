import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqDropdown} from '../react-components';
import {ToniqDropdownOption} from './toniq-dropdown.element';

const options: ToniqDropdownOption[] = [
    {
        value: 1,
        label: 'Option 1',
    },
    {
        value: 2,
        label: 'Option 2',
    },
    {
        value: '3',
        label: 'Option 3',
    },
];

const dropdownStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    selected: {
        options: Object.keys(options),
        mapping: options,
        control: {
            type: 'select',
            labels: {
                0: options[0]?.label,
                1: options[1]?.label,
                2: options[2]?.label,
            },
        },
    },
    dropdownOpen: {
        control: 'boolean',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqDropdown> = {
    title: 'Elements/Toniq Dropdown',
    component: ToniqDropdown,
    argTypes: dropdownStoryControls as ArgTypes,
    // default args
    args: {
        selected: options[0],
        options: options,
        dropdownOpen: false,
    },
};

function handleChange(event: TypedEvent) {
    action(event.type)(event.detail);
}

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof dropdownStoryControls, any>) => (
    <article>
        <h3>Dropdown</h3>
        <ToniqDropdown
            options={options}
            selected={controls.selected}
            dropdownOpen={controls.dropdownOpen}
            onSelectChange={handleChange}
        />
    </article>
);
mainStory.storyName = 'Toniq Dropdown';
