import React from 'react';
import {ToniqButton} from './toniq-button';

export default {
    title: 'Design System/Toniq Button',
    component: ToniqButton,
};

export const Primary = () => <ToniqButton text="Buy Now" />;

export const Secondary = () => <ToniqButton text="Buy Now" variant="secondary" />;

export const Toggle = () => <ToniqButton text="For Sale" type="toggle" />;
