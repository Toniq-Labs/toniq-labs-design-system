import {css, defineElementEvent, html, listen, onResize} from 'element-vir';
import {unsafeCSS} from 'lit';
import {createReasonableLogarithmicRange, toPercent, toPixel} from '../../augments/number';
import {testId} from '../../directives/test-id.directive';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {defineToniqElement} from '../define-toniq-element';
import {
    calculateLabelMargin,
    classNames,
    getCorrectedLimitsAndValue,
    getLabelOverlapDistance,
    getPossiblyLogarithmicValuesForElement,
    getRangeWidth,
    isDoubleRangeValue,
    makeLabel,
    maybeFixSliderValues,
    maybeTransformToLogValue,
    sliderTestIds,
    ToniqSliderDoubleRangeValue,
    ToniqSliderValueType,
} from './slider-logic';

const thumbSizeNumber = 16;
const thumbSize = css`
    ${thumbSizeNumber}px
`;
const thumbStyle = css`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${thumbSize};
    width: ${thumbSize};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${interactionDuration};
    ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
`;

const thumbHoverStyle = css`
    transform: scale(1.2);
`;

type ToniqSliderSingleValueInputs = {
    value: number;
    /** Set to true to enable double range slider. */
    double?: false | undefined;
};

type ToniqSliderDoubleValueInputs = {
    value: Readonly<ToniqSliderDoubleRangeValue>;
    /** Set to true to enable double range slider. */
    double: true;
};

export type ToniqSliderInputs = Readonly<
    {
        /**
         * Use to set the min value. If the value is less than this min then the value will
         * automatically be clipped up to this min.
         */
        min: number;
        /**
         * Use to set the max value. If the input is greater than the max then the value will
         * clipped down to this max.
         */
        max: number;
        logScale?: boolean;
        step?: number;
        /** Appends the given string to the slider's value for label text. */
        suffix?: string;
    } & (ToniqSliderSingleValueInputs | ToniqSliderDoubleValueInputs)
>;

export const ToniqSlider = defineToniqElement<ToniqSliderInputs>()({
    tagName: 'toniq-slider',
    stateInit: {
        rangeWidth: 0,
        labelOverlap: 0,
    },
    events: {
        valueChange: defineElementEvent<ToniqSliderValueType>(),
    },
    styles: css`
        :host {
            display: block;
        }

        .${unsafeCSS(classNames.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .${unsafeCSS(classNames.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
        }

        .${unsafeCSS(classNames.labelPixelMarginWrapper)},
            .${unsafeCSS(classNames.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${unsafeCSS(classNames.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${unsafeCSS(classNames.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${createFocusStyles({mainSelector: '.slider:focus', elementBorderSize: 0, outlineGap: 6})}

        .${unsafeCSS(classNames.lowerSlider)},
        .${unsafeCSS(classNames.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-moz-range-thumb {
            ${thumbStyle}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-webkit-slider-thumb {
            ${thumbStyle}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-webkit-slider-thumb:hover {
            ${thumbHoverStyle}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-moz-range-thumb:hover {
            ${thumbHoverStyle}
        }
    `,
    renderCallback: ({inputs, host, events, dispatch, state, updateState}) => {
        const {actualValue, actualLimits} = getCorrectedLimitsAndValue({...inputs});
        const logRange = createReasonableLogarithmicRange(actualLimits.min, actualLimits.max);

        const isLogScale = inputs.logScale ?? false;
        const suffix = inputs.suffix ?? '';

        const {elementValue, elementLimits} = getPossiblyLogarithmicValuesForElement({
            actualValue,
            actualLimits,
            logScale: isLogScale,
            logRange,
        });
        // update the actual input HTML sliders to the fixed values if needed
        maybeFixSliderValues(elementValue, host);
        const rangeWidth = getRangeWidth(host);

        if (isDoubleRangeValue(elementValue)) {
            return doubleRangeSlider(
                actualValue as ToniqSliderDoubleRangeValue,
                elementValue,
                elementLimits,
            );
        } else {
            return singleRangeSlider(actualValue as number, elementValue, elementLimits);
        }

        function doubleRangeSlider(
            doubleRangeValue: ToniqSliderDoubleRangeValue,
            elementValue: ToniqSliderDoubleRangeValue,
            elementLimits: ToniqSliderDoubleRangeValue,
        ) {
            const progressBarPosition = {
                left: toPixel(
                    ((rangeWidth - thumbSizeNumber) * (elementValue.min - elementLimits.min)) /
                        (elementLimits.max - elementLimits.min) +
                        thumbSizeNumber / 2,
                ),
                right: toPixel(
                    ((rangeWidth - thumbSizeNumber) * (elementLimits.max - elementValue.max)) /
                        (elementLimits.max - elementLimits.min) +
                        thumbSizeNumber / 2,
                ),
            };

            const lowerLabel = makeLabel(doubleRangeValue.min, suffix, isLogScale);
            const upperLabel = makeLabel(doubleRangeValue.max, suffix, isLogScale);

            // super hacky but this ensures that the labels never overlap each other
            setTimeout(() => {
                const labelOverlap = getLabelOverlapDistance(host);
                if (labelOverlap !== state.labelOverlap) {
                    updateState({
                        labelOverlap,
                    });
                }
            }, 0);

            const shouldMoveUpperLabel =
                (elementLimits.max - elementValue.max) / (elementLimits.max - elementLimits.min) >
                0.5;

            const lowerLabelPercentMargin = calculateLabelMargin({
                value: elementValue.min,
                limits: {
                    min: elementLimits.min,
                    max: elementValue.max,
                },
                flip: true,
            });
            const upperLabelPercentMargin = calculateLabelMargin({
                value: elementValue.max,
                limits: {
                    min: elementValue.min,
                    max: elementLimits.max,
                },
                flip: false,
            });

            const upperPixelMargin =
                state.labelOverlap && shouldMoveUpperLabel ? state.labelOverlap : 0;
            const lowerPixelMargin =
                state.labelOverlap && !shouldMoveUpperLabel ? state.labelOverlap : 0;

            return html`
                <div
                    class="range"
                    ${onResize(() => {
                        updateState({
                            rangeWidth: getRangeWidth(host),
                        });
                    })}
                >
                    <div
                        class="progress"
                        style="left: ${progressBarPosition.left}; right:${progressBarPosition.right}"
                    ></div>
                    <span
                        class="${classNames.labelOuterWrapper} ${classNames.lowerLabelWrapper}"
                        style="left: ${progressBarPosition.left}"
                    >
                        <span
                            class="${classNames.labelPercentMarginWrapper}"
                            style="margin-left: ${toPercent(lowerLabelPercentMargin)}"
                        >
                            <span
                                class="${classNames.labelPixelMarginWrapper}"
                                style="margin-right: ${toPixel(lowerPixelMargin)}"
                                ${testId(sliderTestIds.lowerLabel)}
                            >
                                ${lowerLabel}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${classNames.labelOuterWrapper} ${classNames.upperLabelWrapper} ${classNames.rightAlignedLabelWrapper}"
                        style="right: ${progressBarPosition.right}"
                    >
                        <span
                            class="${classNames.labelPercentMarginWrapper}"
                            style="margin-right: ${toPercent(upperLabelPercentMargin)}"
                        >
                            <span
                                class="${classNames.labelPixelMarginWrapper}"
                                style="margin-left: ${toPixel(upperPixelMargin)}"
                                ${testId(sliderTestIds.upperLabel)}
                            >
                                ${upperLabel}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            type="range"
                            step=${inputs.step}
                            class="${classNames.lowerSlider} ${classNames.slider}"
                            .min=${elementLimits.min}
                            .max=${elementLimits.max}
                            .value=${elementValue.min}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    min: maybeTransformToLogValue(
                                        Number(inputElement.value),
                                        logRange,
                                        isLogScale,
                                    ),
                                };
                                dispatch(new events.valueChange(newValue));
                            })}
                        />
                        <input
                            type="range"
                            class="${classNames.upperSlider} ${classNames.slider}"
                            step=${inputs.step}
                            .min=${elementLimits.min}
                            .max=${elementLimits.max}
                            .value=${elementValue.max}
                            ${testId(sliderTestIds.slider)}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    max: maybeTransformToLogValue(
                                        Number(inputElement.value),
                                        logRange,
                                        isLogScale,
                                    ),
                                };
                                dispatch(new events.valueChange(newValue));
                            })}
                        />
                    </div>
                </div>
            `;
        }

        function singleRangeSlider(
            singleValue: number,
            elementValue: number,
            elementLimits: ToniqSliderDoubleRangeValue,
        ) {
            const progressRightPosition = toPixel(
                ((rangeWidth - thumbSizeNumber) * (elementLimits.max - elementValue)) /
                    (elementLimits.max - elementLimits.min) +
                    thumbSizeNumber / 2,
            );

            const label = makeLabel(singleValue, suffix, isLogScale);
            const labelMargin = calculateLabelMargin({
                value: elementValue,
                limits: elementLimits,
                flip: false,
            });

            return html`
                <div
                    class="range"
                    ${onResize(() => {
                        updateState({
                            rangeWidth: getRangeWidth(host),
                        });
                    })}
                >
                    <div class="progress" style="left: 0px; right: ${progressRightPosition}"></div>
                    <span
                        class="${classNames.labelOuterWrapper} ${classNames.rightAlignedLabelWrapper}"
                        style="right: ${progressRightPosition}"
                    >
                        <span
                            class="${classNames.labelPercentMarginWrapper}"
                            style="margin-right: ${toPercent(labelMargin)}"
                            ${testId(sliderTestIds.label)}
                        >
                            ${label}
                        </span>
                    </span>
                    <input
                        type="range"
                        class="${classNames.slider}"
                        step=${inputs.step}
                        .min=${elementLimits.min}
                        .max=${elementLimits.max}
                        .value=${elementValue}
                        ${testId(sliderTestIds.slider)}
                        ${listen('input', (event) => {
                            const inputElement = event.target as HTMLInputElement;
                            const newValue = maybeTransformToLogValue(
                                Number(inputElement.value),
                                logRange,
                                isLogScale,
                            );
                            dispatch(new events.valueChange(newValue));
                        })}
                    />
                </div>
            `;
        }
    },
});
