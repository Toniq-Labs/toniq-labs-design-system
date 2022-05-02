import React from 'react';
import {ButtonPrimary} from './primary/button-primary';
import {ButtonSelection} from './selection/button-selection';

export default {
    title: 'Design System/Button',
    component: ButtonPrimary,
};

export const Primary = () => <ButtonPrimary text="Buy Now" />;

export const Selection = () => <ButtonSelection text="For Sale" />;
