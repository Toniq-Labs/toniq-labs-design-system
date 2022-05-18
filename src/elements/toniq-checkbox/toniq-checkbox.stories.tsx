import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqCheckbox} from '../react-components';

export default {
    title: 'Toniq Checkbox',
    component: ToniqCheckbox,
};

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
