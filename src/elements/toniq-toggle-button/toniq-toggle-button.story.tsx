import {action} from '@storybook/addon-actions';
import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqToggleButton} from '../react-components';
import {ToniqToggleButton as NativeToniqToggleButton} from './toniq-toggle-button.element';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Toggle Button',
    component: ToniqToggleButton,
};

export default componentStoryMeta;

function handleChange(event: typeof NativeToniqToggleButton.events.activeChange) {
    action(event.type)(event);
}

export const mainStory = () => {
    return (
        <>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Inactive by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Active by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" active />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
