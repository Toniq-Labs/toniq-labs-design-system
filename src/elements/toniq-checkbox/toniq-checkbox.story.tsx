import {ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
};

export default componentStoryMeta;

const handleChange = (event: TypedEvent) => {
    console.log(event.detail);
};

export const mainStory = () => {
    return (
        <>
            <h3>Unchecked by default</h3>
            <ToniqCheckbox onCheckedChange={handleChange} text="Orange" />

            <h3>Checked by default</h3>
            <ToniqCheckbox onCheckedChange={handleChange} text="Orange" checked />
        </>
    );
};
mainStory.storyName = 'Toniq Checkbox';
