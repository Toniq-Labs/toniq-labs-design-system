import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqButton} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.component';

export default {
    title: 'Design System/Toniq Button',
    component: ToniqButton,
};

const handleClick = (e: TypedEvent) => {
    console.log(e);
};

export const Primary = () => <ToniqButton text="Buy Now" />;

export const Secondary = () => (
    <ToniqButton text="Buy Now" variant={ToniqButtonVariant.Secondary} />
);

export const ClickEvent = () => <ToniqButton text="Buy Now" onClick={handleClick} />;
