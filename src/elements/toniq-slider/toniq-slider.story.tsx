import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {ToniqSlider} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqSlider> = {
    title: 'Elements/Toniq Slider',
    component: ToniqSlider,
};

export default componentStoryMeta;

export const mainStory = () => (
    <article>
        <h3>Slider</h3>
        <ToniqSlider min={1} max={500} />
    </article>
);
mainStory.storyName = 'Toniq Slider';
