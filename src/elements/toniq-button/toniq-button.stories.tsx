import {TypedEvent} from 'element-vir';
import React from 'react';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {ToniqButton, ToniqIcon} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.element';

export default {
    title: 'Toniq Button',
    component: ToniqButton,
};
const handleClick = (e: TypedEvent) => {
    console.log(e);
};
export const mainStory = () => (
    <article
        style={{
            fontFamily: 'sans-serif',
        }}
    >
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
