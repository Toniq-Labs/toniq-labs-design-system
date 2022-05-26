import {ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqDropdown} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqDropdown> = {
    title: 'Elements/Toniq Dropdown',
    component: ToniqDropdown,
};

const list = [
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

const handleChange = (event: TypedEvent) => {
    console.log(event.detail);
};

export default componentStoryMeta;

export const mainStory = () => (
    <article>
        <h3>No Default Option (First option selected as default)</h3>
        <ToniqDropdown list={list} />

        <h3>User Default Option</h3>
        <ToniqDropdown list={list} select={list[2]} />

        <h3>onSelectChange Event</h3>
        <ToniqDropdown list={list} onSelectChange={handleChange} />
    </article>
);
mainStory.storyName = 'Toniq Dropdown';
