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
        <ToniqSlider />

        <h3>Slider with set value</h3>
        <ToniqSlider value={40} />

        <h3>Slider with set min and max</h3>
        <ToniqSlider min={10} max={50} />

        <h3>Slider with Suffix</h3>
        <ToniqSlider min={1} max={100} value={40} suffix={'ICP'} />

        <h3>Slider Double Range</h3>
        <ToniqSlider min={0} max={500} value={{min: 120, max: 340}} suffix={'ICP'} double />
    </article>
);
mainStory.storyName = 'Toniq Slider';
