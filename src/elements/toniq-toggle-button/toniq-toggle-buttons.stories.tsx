import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqToggleButton} from '../react-components';

export default {
    title: 'Design System/Toniq Toggle Button',
    component: ToniqToggleButton,
};

const handleChange = (event: TypedEvent) => {
    console.log(event.detail);
};

export const Default = () => <ToniqToggleButton text="Buy Now" />;

export const Active = () => <ToniqToggleButton text="Buy Now" active />;

export const ChangeEvent = () => <ToniqToggleButton text="Buy Now" onActiveChange={handleChange} />;
