import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqToggleButton} from '../react-components';

export default {
    title: 'Toniq Toggle Button',
    component: ToniqToggleButton,
};

const handleChange = (event: TypedEvent) => {
    console.log(event.detail);
};

export const mainStory = () => {
    return (
        <>
            <h3>Inactive by default</h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" />

            <h3>Active by default</h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" active />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
