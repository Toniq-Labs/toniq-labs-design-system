import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {useReducer} from 'react';
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

const sliderStatesInit = {
    single: 20,
    double: {min: 15, max: 32},
    logScaleSingle: 20,
    logScaleDouble: {min: 15, max: 5_000},
    singlePadding: 20,
    doublePadding: {min: 15, max: 32},
} as const;

type SliderStoryState = Readonly<{
    [P in keyof typeof sliderStatesInit]: typeof sliderStatesInit[P] extends object
        ? Readonly<Required<Record<'min' | 'max', number>>>
        : number;
}>;

export const mainStory = (controls: Record<keyof typeof sliderStoryControls, any>) => {
    const [
        sliderStates,
        updateSliderStates,
    ] = useReducer(
        (
            state: SliderStoryState,
            {
                key,
                value,
            }: {
                key: keyof SliderStoryState;
                value: SliderStoryState[typeof key];
            },
        ): SliderStoryState => {
            return {
                ...state,
                [key]: value,
            };
        },
        sliderStatesInit,
    );

    if (sliderStates.single !== controls.value) {
        updateSliderStates({key: 'single', value: controls.value});
    }
    if (sliderStates.singlePadding !== controls.value) {
        updateSliderStates({key: 'singlePadding', value: controls.value});
    }

    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Single Range
            </h3>
            <ToniqSlider
                value={sliderStates.single}
                min={controls.min}
                max={controls.max}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({key: 'single', value: event.detail});
                    handleEventAsAction(event);
                }}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Log Scale
            </h3>
            <ToniqSlider
                value={sliderStates.logScaleSingle}
                logScale={true}
                min={5}
                max={5_432_109}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({key: 'logScaleSingle', value: event.detail});
                    handleEventAsAction(event);
                }}
            />
            <ToniqSlider
                value={sliderStates.logScaleDouble}
                logScale={true}
                double={true}
                min={5}
                max={5_432_109}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({key: 'logScaleDouble', value: event.detail});
                    handleEventAsAction(event);
                }}
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
                value={sliderStates.double}
                suffix={controls.suffix}
                double
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({key: 'double', value: event.detail});
                    handleEventAsAction(event);
                }}
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
                    value={sliderStates.singlePadding}
                    min={controls.min}
                    max={controls.max}
                    suffix={controls.suffix}
                    onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                        updateSliderStates({key: 'singlePadding', value: event.detail});
                        handleEventAsAction(event);
                    }}
                    style={{padding: '16px'}}
                />
            </div>
            <div style={{padding: '16px'}}>
                <ToniqSlider
                    min={controls.min}
                    max={controls.max}
                    value={sliderStates.doublePadding}
                    suffix={controls.suffix}
                    double
                    onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                        updateSliderStates({key: 'doublePadding', value: event.detail});
                        handleEventAsAction(event);
                    }}
                    style={{padding: '16px'}}
                />
            </div>
        </article>
    );
};
mainStory.storyName = 'Toniq Slider';
