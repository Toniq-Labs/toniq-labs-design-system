import {action} from '@storybook/addon-actions';
import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {cssToReactStyleObject} from '../../augments/react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqCheckbox, ToniqToggleButton} from '../react-components';
import {ToniqCheckbox as NativeToniqCheckbox} from './toniq-checkbox.element';

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Checkbox',
    component: ToniqCheckbox,
};

export default componentStoryMeta;

function handleCheckedChange(event: typeof NativeToniqCheckbox.events.checkedChange) {
    action(event.type)(event);
}

export const mainStory = () => {
    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(String(toniqFontStyles.h3Font)),
                }}
            >
                Unchecked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleCheckedChange} text="Orange" />

            <h3
                style={{
                    ...cssToReactStyleObject(String(toniqFontStyles.h3Font)),
                }}
            >
                Checked by default
            </h3>
            <ToniqCheckbox onCheckedChange={handleCheckedChange} text="Orange" checked />
        </article>
    );
};
mainStory.storyName = 'Toniq Checkbox';
