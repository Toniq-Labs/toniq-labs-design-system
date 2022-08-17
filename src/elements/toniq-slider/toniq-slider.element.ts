import {css, defineElementEvent, html, listen, onResize} from 'element-vir';
import {unsafeCSS} from 'lit';
import {toPercent, toPixel} from '../../augments/number';
import {testId} from '../../directives/test-id.directive';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {defineToniqElement} from '../define-toniq-element';
import {
    calculateLabelMargin,
    classNames,
    getCorrectedLimits,
    getCorrectedValue,
    getLabelOverlapDistance,
    getRangeWidth,
    isDoubleRangeValue,
    makeLabel,
    maybeFixSliderValues,
    sliderTestIds,
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

export const ToniqSlider = defineToniqElement({
    tagName: 'toniq-slider',
    props: {
        /** Use to programmatically set the slider's value. */
        value: 0 as ToniqSliderValueType,
        /**
         * Use to set the min value. If the value is less than this min then the value will
         * automatically be clipped up to this min.
         */
        min: 0,
        /**
         * Use to set the max value. If the input is greater than the max then the value will
         * clipped down to this max.
         */
        max: 100,
        /** Set to true to enable double range slider. */
        double: false,
        /** Appends the given string to the slider's value for label text. */
        suffix: '',
        step: 1,
        internalRangeWidth: 0,
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
        ${createFocusStyles('.slider:focus', 0)}

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
    renderCallback: ({props, host, events, dispatch, setProps}) => {
        const limits = getCorrectedLimits({...props});
        const value = getCorrectedValue({...props});
        // update the actual input HTML sliders to the fixed values
        maybeFixSliderValues(value, host);

        const rangeWidth = getRangeWidth(host);

        if (isDoubleRangeValue(value)) {
            // for type preservation in later callback definitions
            const doubleRangeValue = value;

            const progressBarPosition = {
                left: toPixel(
                    ((rangeWidth - thumbSizeNumber) * (doubleRangeValue.min - limits.min)) /
                        (limits.max - limits.min) +
                        thumbSizeNumber / 2,
                ),
                right: toPixel(
                    ((rangeWidth - thumbSizeNumber) * (limits.max - doubleRangeValue.max)) /
                        (limits.max - limits.min) +
                        thumbSizeNumber / 2,
                ),
            };

            const lowerLabel = makeLabel(doubleRangeValue.min, props.suffix);
            const upperLabel = makeLabel(doubleRangeValue.max, props.suffix);

            setTimeout(() => {
                const labelOverlap = getLabelOverlapDistance(host);
                if (labelOverlap !== props.labelOverlap) {
                    setProps({
                        labelOverlap,
                    });
                }
            }, 0);

            const shouldMoveUpperLabel =
                (limits.max - doubleRangeValue.max) / (limits.max - limits.min) > 0.5;

            const lowerLabelPercentMargin = calculateLabelMargin({
                value: doubleRangeValue.min,
                limits: {
                    min: limits.min,
                    max: doubleRangeValue.max,
                },
                flip: true,
            });
            const upperLabelPercentMargin = calculateLabelMargin({
                value: doubleRangeValue.max,
                limits: {
                    min: doubleRangeValue.min,
                    max: limits.max,
                },
                flip: false,
            });

            const upperPixelMargin =
                props.labelOverlap && shouldMoveUpperLabel ? props.labelOverlap : 0;
            const lowerPixelMargin =
                props.labelOverlap && !shouldMoveUpperLabel ? props.labelOverlap : 0;

            return html`
                <div
                    class="range"
                    ${onResize(() => {
                        setProps({
                            internalRangeWidth: getRangeWidth(host),
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
                            step=${props.step}
                            class="${classNames.lowerSlider} ${classNames.slider}"
                            .min=${limits.min}
                            .max=${limits.max}
                            .value=${doubleRangeValue.min}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    min: Number(inputElement.value),
                                };
                                setProps({
                                    value: newValue,
                                });
                                dispatch(new events.valueChange(newValue));
                            })}
                        />
                        <input
                            type="range"
                            class="${classNames.upperSlider} ${classNames.slider}"
                            step=${props.step}
                            .min=${limits.min}
                            .max=${limits.max}
                            .value=${doubleRangeValue.max}
                            ${testId(sliderTestIds.slider)}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    max: Number(inputElement.value),
                                };
                                setProps({
                                    value: newValue,
                                });
                                dispatch(new events.valueChange(newValue));
                            })}
                        />
                    </div>
                </div>
            `;
        } else {
            // for type preservation in later callback definitions
            const singleValue = value;

            const progressRightPosition = toPixel(
                ((rangeWidth - thumbSizeNumber) * (limits.max - singleValue)) /
                    (limits.max - limits.min) +
                    thumbSizeNumber / 2,
            );

            const label = makeLabel(singleValue, props.suffix);
            const labelMargin = calculateLabelMargin({
                value: singleValue,
                limits,
                flip: false,
            });

            return html`
                <div
                    class="range"
                    ${onResize(() => {
                        setProps({
                            internalRangeWidth: getRangeWidth(host),
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
                        step=${props.step}
                        .min=${limits.min}
                        .max=${limits.max}
                        .value=${singleValue}
                        ${testId(sliderTestIds.slider)}
                        ${listen('input', (event) => {
                            const inputElement = event.target as HTMLInputElement;
                            const newValue = Number(inputElement.value);
                            setProps({
                                value: newValue,
                            });
                            dispatch(new events.valueChange(newValue));
                        })}
                    />
                </div>
            `;
        }
    },
});
