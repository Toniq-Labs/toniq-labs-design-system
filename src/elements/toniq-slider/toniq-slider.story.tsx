import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {cssToReactStyleObject, toniqFontStyles} from '../../styles';
import {ToniqSlider} from '../react-components';

const sliderStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    value: {
        name: 'Value',
        control: 'number',
        min: 0,
        max: 100,
    },
    min: {
        name: 'Min',
        control: 'number',
    },
    max: {
        name: 'Max',
        control: 'number',
    },
    double: {
        table: {
            disable: true,
        },
    },
    suffix: {
        name: 'Suffix',
    },
    referenceElements: {
        table: {
            disable: true,
        },
    },
    progressStyle: {
        table: {
            disable: true,
        },
    },
    labelStyle: {
        table: {
            disable: true,
        },
    },
    lowerLabelStyle: {
        table: {
            disable: true,
        },
    },
    upperLabelStyle: {
        table: {
            disable: true,
        },
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqSlider> = {
    title: 'Elements/Toniq Slider',
    component: ToniqSlider,
    argTypes: sliderStoryControls as ArgTypes,
    // default args
    args: {
        value: 20,
        min: 10,
        max: 50,
        suffix: 'ICP',
    },
};

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof sliderStoryControls, any>) => (
    <article>
        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Single Range
        </h3>
        <ToniqSlider
            value={controls.value}
            min={controls.min}
            max={controls.max}
            suffix={controls.suffix}
            onValueChange={handleEventAsAction}
        />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            Double range
        </h3>
        <ToniqSlider
            min={controls.min}
            max={controls.max}
            value={{min: 1, max: 50}}
            suffix={controls.suffix}
            double
            onValueChange={handleEventAsAction}
        />

        <h3
            style={{
                ...cssToReactStyleObject(toniqFontStyles.h3Font),
            }}
        >
            With Padding
        </h3>

        <div style={{padding: '16px'}}>
            <ToniqSlider
                value={controls.value}
                min={controls.min}
                max={controls.max}
                suffix={controls.suffix}
                onValueChange={handleEventAsAction}
                style={{padding: '16px'}}
            />
        </div>
        <div style={{padding: '16px'}}>
            <ToniqSlider
                min={controls.min}
                max={controls.max}
                value={{min: 1, max: 50}}
                suffix={controls.suffix}
                double
                onValueChange={handleEventAsAction}
                style={{padding: '16px'}}
            />
        </div>
    </article>
);
mainStory.storyName = 'Toniq Slider';
