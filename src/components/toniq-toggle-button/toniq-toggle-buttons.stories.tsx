import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqToggleButton} from '../react-components';

export default {
    title: 'Design System/Toniq Toggle Button',
    component: ToniqToggleButton,
};

const handleChange = (e: TypedEvent) => {
    console.log(e.detail);
};

export const Toggle = () => <ToniqToggleButton text="Buy Now" onChange={handleChange} />;

export const ForceChecked = () => <ToniqToggleButton text="Buy Now" checked />;
