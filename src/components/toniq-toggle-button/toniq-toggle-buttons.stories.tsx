import React from 'react';
import {ToniqToggleButton} from '../react-components';

export default {
    title: 'Design System/Toniq Toggle Button',
    component: ToniqToggleButton,
};

const handleChange = (e: Event) => {
    console.log((e.target as HTMLInputElement).checked);
};

export const Toggle = () => <ToniqToggleButton text="Buy Now" onchange={handleChange} />;

export const ForceChecked = () => <ToniqToggleButton text="Buy Now" checked />;
