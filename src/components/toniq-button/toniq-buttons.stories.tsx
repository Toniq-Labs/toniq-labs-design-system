import React from 'react';
import {ToniqButton} from './toniq-button';

export default {
    title: 'Design System/Button',
    component: ToniqButton,
};

export const Default = () => <ToniqButton text="Buy Now" />;

export const Selection = () => <ToniqButton text="For Sale" type="selection" />;
