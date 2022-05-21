import {ComponentMeta} from '@storybook/react';
import {TypedEvent} from 'element-vir';
import React from 'react';
import {cssToReactStyleObject} from '../../augments/react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
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
                Unchecked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleChange} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(String(toniqFontStyles.h3Font)),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleChange} text="Orange" checked />
        </>
    );
};
mainStory.storyName = 'Toniq Checkbox';
