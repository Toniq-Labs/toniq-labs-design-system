import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {createMultiElementState} from '../../storybook-helpers/multi-element-state';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {cssToReactStyleObject, toniqFontStyles} from '../../styles';
import {ToniqSlider} from '../react-components';

const sliderStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
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
    controlledByInputsBelow: 20,
    double: {min: 15, max: 32},
    logScaleSingle: 20,
    logScaleDouble: {min: 0, max: 5_000},
    logScaleSingleWithDecimalPoint: 38.99,
    logScaleDoubleWithDecimalPoint: {min: 38.99, max: 5_432_109},
    singlePadding: 20,
    doublePadding: {min: 15, max: 32},
};

export const mainStory = (controls: Record<keyof typeof sliderStoryControls, any>) => {
    const [
        sliderStates,
        updateSliderStates,
        stateKeys,
    ] = createMultiElementState(sliderStatesInit);

    if (sliderStates.controlledByInputsBelow !== controls.value) {
        updateSliderStates({key: stateKeys.controlledByInputsBelow, value: controls.value});
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
                    updateSliderStates({key: stateKeys.single, value: event.detail});
                    handleEventAsAction(event);
                }}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Controlled by Storybook controls below
            </h3>
            <p style={{...cssToReactStyleObject(toniqFontStyles.paragraphFont)}}>
                Can't use the mouse or keyboard.
            </p>
            <ToniqSlider
                value={sliderStates.controlledByInputsBelow}
                min={controls.min}
                max={controls.max}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({
                        key: stateKeys.controlledByInputsBelow,
                        value: event.detail,
                    });
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
                    updateSliderStates({key: stateKeys.logScaleSingle, value: event.detail});
                    handleEventAsAction(event);
                }}
            />
            <ToniqSlider
                value={sliderStates.logScaleDouble}
                logScale={true}
                double={true}
                min={0}
                max={5_432_109.45}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({key: stateKeys.logScaleDouble, value: event.detail});
                    handleEventAsAction(event);
                }}
            />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Log Scale that has min with decimal point
            </h3>
            <ToniqSlider
                value={sliderStates.logScaleSingleWithDecimalPoint}
                logScale={true}
                min={38.99}
                max={5_432_109}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({
                        key: stateKeys.logScaleSingleWithDecimalPoint,
                        value: event.detail,
                    });
                    handleEventAsAction(event);
                }}
            />
            <ToniqSlider
                value={sliderStates.logScaleDoubleWithDecimalPoint}
                logScale={true}
                double={true}
                min={38.99}
                max={5_432_109}
                suffix={controls.suffix}
                onValueChange={(event: CustomEvent<number | {min: number; max: number}>) => {
                    updateSliderStates({
                        key: stateKeys.logScaleDoubleWithDecimalPoint,
                        value: event.detail,
                    });
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
                    updateSliderStates({key: stateKeys.double, value: event.detail});
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
                        updateSliderStates({key: stateKeys.singlePadding, value: event.detail});
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
                        updateSliderStates({key: stateKeys.doublePadding, value: event.detail});
                        handleEventAsAction(event);
                    }}
                    style={{padding: '16px'}}
                />
            </div>
        </article>
    );
};
mainStory.storyName = 'Toniq Slider';
