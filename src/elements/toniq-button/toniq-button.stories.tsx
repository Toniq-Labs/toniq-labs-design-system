import {TypedEvent} from 'element-vir';
import React from 'react';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {ToniqButton, ToniqIcon} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.element';

export default {
    title: 'Design System/Toniq Button',
    component: ToniqButton,
};

const handleClick = (e: TypedEvent) => {
    console.log(e);
};

export const Primary = () => <ToniqButton>Buy Now</ToniqButton>;

export const Secondary = () => (
    <ToniqButton variant={ToniqButtonVariant.Secondary}>Buy Now</ToniqButton>
);

export const HTML = () => (
    <ToniqButton>
        <div>
            <span>Buy Now</span>
        </div>
    </ToniqButton>
);

export const ButtonToniqIcon = () => (
    <ToniqButton variant={ToniqButtonVariant.Secondary}>
        <ToniqIcon title="ExternalLink16Icon" icon={ExternalLink24Icon} />
    </ToniqButton>
);

export const ClickEvent = () => <ToniqButton onClick={handleClick}>Buy Now</ToniqButton>;
