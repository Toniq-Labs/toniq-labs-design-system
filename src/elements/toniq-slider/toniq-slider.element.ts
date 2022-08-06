import {isObject} from 'augment-vir';
import {css, defineElementEvent, html, listen, onResize} from 'element-vir';
import {unsafeCSS} from 'lit';
import {clamp, toPercent, toPixel} from '../../augments/number';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {defineToniqElement} from '../define-toniq-element';

export interface ToniqSliderDoubleRangeValue {
    min: number;
    max: number;
}

export interface ToniqSliderReferenceElements {
    progress: HTMLElement | null | undefined;
    slider?: HTMLInputElement | null | undefined;
    label?: HTMLElement | null | undefined;
    lowerSlider?: HTMLInputElement | null | undefined;
    upperSlider?: HTMLInputElement | null | undefined;
    lowerLabel?: HTMLElement | null | undefined;
    upperLabel?: HTMLElement | null | undefined;
}

export interface ToniqSliderProgressStyle {
    width: string;
    left?: string;
    right?: string;
}

export interface ToniqSliderLabelStyle {
    innerText: string;
    left?: string;
}

export type ToniqSliderValueType = number | ToniqSliderDoubleRangeValue;

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

const ClassNames = {
    LowerLabelWrapper: 'lower-label-wrapper',
    UpperLabelWrapper: 'upper-label-wrapper',
    LabelPercentMarginWrapper: 'label-percent-wrapper',
    LabelPixelMarginWrapper: 'label-pixel-wrapper',
    LabelOuterWrapper: 'label-outer-wrapper',
    RightAlignedLabelWrapper: 'label-right-wrapper',
    Range: 'range',
} as const;

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

        .${unsafeCSS(ClassNames.Range)} {
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

        .${unsafeCSS(ClassNames.LabelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
        }

        .${unsafeCSS(ClassNames.LabelPixelMarginWrapper)},
            .${unsafeCSS(ClassNames.LabelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${unsafeCSS(ClassNames.RightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .slider {
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

        .lower-slider,
        .upper-slider {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .slider::-moz-range-thumb {
            ${thumbStyle}
        }

        /* these selectors fail if combined with a comma */
        .slider::-webkit-slider-thumb {
            ${thumbStyle}
        }

        /* these selectors fail if combined with a comma */
        .slider::-webkit-slider-thumb:hover {
            ${thumbHoverStyle}
        }

        /* these selectors fail if combined with a comma */
        .slider::-moz-range-thumb:hover {
            ${thumbHoverStyle}
        }
    `,
    renderCallback: ({props, host, events, dispatch, setProps}) => {
        const limits = getCorrectedLimits({...props});
        const value = getCorrectedValue({...props});

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
                        class="${ClassNames.LabelOuterWrapper} ${ClassNames.LowerLabelWrapper}"
                        style="left: ${progressBarPosition.left}"
                    >
                        <span
                            class="${ClassNames.LabelPercentMarginWrapper}"
                            style="margin-left: ${toPercent(lowerLabelPercentMargin)}"
                        >
                            <span
                                class="${ClassNames.LabelPixelMarginWrapper}"
                                style="margin-right: ${toPixel(lowerPixelMargin)}"
                            >
                                ${lowerLabel}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${ClassNames.LabelOuterWrapper} ${ClassNames.UpperLabelWrapper} ${ClassNames.RightAlignedLabelWrapper}"
                        style="right: ${progressBarPosition.right}"
                    >
                        <span
                            class="${ClassNames.LabelPercentMarginWrapper}"
                            style="margin-right: ${toPercent(upperLabelPercentMargin)}"
                        >
                            <span
                                class="${ClassNames.LabelPixelMarginWrapper}"
                                style="margin-left: ${toPixel(upperPixelMargin)}"
                            >
                                ${upperLabel}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            type="range"
                            step=${props.step}
                            class="lower-slider slider"
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
                            class="upper-slider slider"
                            step=${props.step}
                            .min=${limits.min}
                            .max=${limits.max}
                            .value=${doubleRangeValue.max}
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
                        class="${ClassNames.LabelOuterWrapper} ${ClassNames.RightAlignedLabelWrapper}"
                        style="right: ${progressRightPosition}"
                    >
                        <span
                            class="${ClassNames.LabelPercentMarginWrapper}"
                            style="margin-right: ${toPercent(labelMargin)}"
                        >
                            ${label}
                        </span>
                    </span>
                    <input
                        type="range"
                        class="slider"
                        step=${props.step}
                        .min=${limits.min}
                        .max=${limits.max}
                        .value=${singleValue}
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

function getLabelElementBoxes(host: HTMLElement) {
    const lowerLabel = host.shadowRoot?.querySelector(
        `.${ClassNames.LowerLabelWrapper} .${ClassNames.LabelPercentMarginWrapper}`,
    );
    const upperLabel = host.shadowRoot?.querySelector(
        `.${ClassNames.UpperLabelWrapper} .${ClassNames.LabelPercentMarginWrapper}`,
    );

    if (upperLabel instanceof HTMLElement && lowerLabel instanceof HTMLElement) {
        const lowerRect = lowerLabel.getBoundingClientRect();
        const upperRect = upperLabel.getBoundingClientRect();
        return {
            lower: lowerRect,
            upper: upperRect,
        };
    } else {
        return undefined;
    }
}

function getLabelOverlapDistance(host: HTMLElement, buffer = 8): number {
    const labelBoxes = getLabelElementBoxes(host);

    if (!labelBoxes) {
        return 0;
    }

    const diff = labelBoxes.lower.right - labelBoxes.upper.left + buffer;

    return Math.max(0, diff);
}

function calculateLabelMargin({
    value,
    limits,
    flip,
}: {
    value: number;
    limits: ToniqSliderDoubleRangeValue;
    flip: boolean;
}): number {
    const ratio = (limits.max - value) / (limits.max - limits.min);
    const percentage = ratio * 100;
    const finalValue = flip ? 100 - percentage : percentage;
    return -finalValue;
}

function isDoubleRangeValue(value: ToniqSliderValueType): value is ToniqSliderDoubleRangeValue {
    return isObject(value) && value.min !== undefined && value.max !== undefined;
}

function getRangeWidth(host: HTMLElement): number {
    const sliderElement = host.shadowRoot?.querySelector(`.${ClassNames.Range}`);

    return sliderElement?.clientWidth ?? 0;
}

function makeLabel(value: number, suffix: string): string {
    return `${value} ${suffix}`;
}

function getCorrectedLimits({min, max}: ToniqSliderDoubleRangeValue): ToniqSliderDoubleRangeValue {
    if (min > max) {
        return {
            min: max,
            max: min,
        };
    }
    return {min, max};
}

function getCorrectedValue({
    value,
    double,
    min,
    max,
}: Readonly<
    {
        value: Readonly<ToniqSliderValueType>;
        double: boolean;
    } & ToniqSliderDoubleRangeValue
>): ToniqSliderValueType {
    if (double) {
        if (isDoubleRangeValue(value)) {
            const clampedValue: ToniqSliderDoubleRangeValue = {
                min: clamp(value.min, min, Math.min(value.max, max)),
                max: clamp(value.max, Math.max(value.min, min), max),
            };

            return clampedValue;
        } else {
            return {min, max};
        }
    } else {
        if (isDoubleRangeValue(value)) {
            return min;
        } else {
            const clampedValue: number = clamp(value, min, max);

            return clampedValue;
        }
    }
}
