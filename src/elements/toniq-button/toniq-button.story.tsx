import {action} from '@storybook/addon-actions';
import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqButton, ToniqIcon, ToniqToggleButton} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.element';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Button',
    component: ToniqButton,
};

export default componentStoryMeta;

function handleClick(event: Event) {
    action(event.type)(event);
}

export const mainStory = () => (
    <article>
        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Primary
        </h3>
        <ToniqButton onClick={handleClick}>Buy Now</ToniqButton>

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Secondary
        </h3>
        <ToniqButton onClick={handleClick} variant={ToniqButtonVariant.Secondary}>
            Buy Now
        </ToniqButton>

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With HTML child
        </h3>
        <ToniqButton onClick={handleClick}>
            <div>
                <span>Buy Now</span>
            </div>
        </ToniqButton>

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With ToniqIcon child
        </h3>
        <ToniqButton onClick={handleClick} variant={ToniqButtonVariant.Secondary}>
            <ToniqIcon title="ExternalLink16Icon" icon={ExternalLink24Icon} />
        </ToniqButton>
    </article>
);
mainStory.storyName = 'Toniq Button';
