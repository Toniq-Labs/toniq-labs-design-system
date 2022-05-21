import {ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {cssToReactStyleObject} from '../../augments/react';
import {toniqFontStyles} from '../../styles';
import {ToniqToggleButton} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Toggle Button',
    component: ToniqToggleButton,
};

export default componentStoryMeta;

const handleChange = (event: TypedEvent) => {
    console.log(event);
};

export const mainStory = () => {
    return (
        <>
            <h3
                style={{
                    ...cssToReactStyleObject(String(toniqFontStyles.h3Font)),
                }}
            >
                Inactive by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" />

            <h3
                style={{
                    ...cssToReactStyleObject(String(toniqFontStyles.h3Font)),
                }}
            >
                Active by default
            </h3>
            <ToniqToggleButton onActiveChange={handleChange} text="Buy Now" active />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
