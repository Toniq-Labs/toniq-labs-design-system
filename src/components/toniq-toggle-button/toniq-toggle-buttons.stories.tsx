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

export const Default = () => <ToniqToggleButton text="Buy Now" />;

export const Checked = () => <ToniqToggleButton text="Buy Now" checked />;

export const ChangeEvent = () => <ToniqToggleButton text="Buy Now" onChange={handleChange} />;
