import {ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {ToniqButton, ToniqIcon, ToniqToggleButton} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.element';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Button',
    component: ToniqButton,
};

export default componentStoryMeta;

const handleClick = (e: TypedEvent) => {
    console.log(e);
};

export const mainStory = () => (
    <article>
        <h3>Primary</h3>
        <ToniqButton onClick={handleClick}>Buy Now</ToniqButton>

        <h3>Secondary</h3>
        <ToniqButton onClick={handleClick} variant={ToniqButtonVariant.Secondary}>
            Buy Now
        </ToniqButton>

        <h3>With HTML child</h3>
        <ToniqButton onClick={handleClick}>
            <div>
                <span>Buy Now</span>
            </div>
        </ToniqButton>

        <h3>With ToniqIcon child</h3>
        <ToniqButton onClick={handleClick} variant={ToniqButtonVariant.Secondary}>
            <ToniqIcon title="ExternalLink16Icon" icon={ExternalLink24Icon} />
        </ToniqButton>
    </article>
);
mainStory.storyName = 'Toniq Button';
