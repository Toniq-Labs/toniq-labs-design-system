import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {ToniqDropdown} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqDropdown> = {
    title: 'Elements/Toniq Dropdown',
    component: ToniqDropdown,
};

export default componentStoryMeta;

export const mainStory = () => (
    <article>
        <h3>Primary</h3>
        <ToniqDropdown>Buy Now</ToniqDropdown>
    </article>
);
mainStory.storyName = 'Toniq Dropdown';
