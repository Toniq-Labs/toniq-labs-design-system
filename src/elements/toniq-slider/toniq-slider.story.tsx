import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {cssToReactStyleObject, toniqFontStyles} from '../../styles';
import {ToniqSlider} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqSlider> = {
    title: 'Elements/Toniq Slider',
    component: ToniqSlider,
};

export default componentStoryMeta;

export const mainStory = () => (
    <article>
        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Default
        </h3>
        <ToniqSlider onValueChange={handleEventAsAction} />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With set value
        </h3>
        <ToniqSlider value={40} />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With set min and max
        </h3>
        <ToniqSlider min={10} max={50} />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With suffix
        </h3>
        <ToniqSlider min={1} max={100} value={40} suffix={'ICP'} />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Double range
        </h3>
        <ToniqSlider
            min={0}
            max={500}
            value={{min: 120, max: 340}}
            suffix={'ICP'}
            double
            onValueChange={handleEventAsAction}
        />
    </article>
);
mainStory.storyName = 'Toniq Slider';
