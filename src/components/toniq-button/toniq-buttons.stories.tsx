import React from 'react';
import {ToniqButton} from '../react-components';
import {ToniqButtonType, ToniqButtonVariant} from './toniq-button.component';

export default {
    title: 'Design System/Toniq Button',
    component: ToniqButton,
};

export const Primary = () => <ToniqButton text="Buy Now" />;

export const Secondary = () => (
    <ToniqButton text="Buy Now" variant={ToniqButtonVariant.Secondary} />
);

export const Toggle = () => <ToniqButton text="For Sale" type={ToniqButtonType.Toggle} />;
