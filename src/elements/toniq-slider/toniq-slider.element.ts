import {isObject} from 'augment-vir';
import {css, defineElementEvent, html, listen, onResize} from 'element-vir';
import {clamp, toPixel} from '../../augments/number';
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

const thumbSize = css`16px`;

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
        /** Use to programmatically set the default value. */
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
        /** Use to add suffix to the value. */
        suffix: '',
        internalRangeWidth: 0,
    },
    events: {
        valueChange: defineElementEvent<ToniqSliderValueType>(),
    },
    styles: css`
        :host {
            display: block;
        }

        .range {
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

        .label {
            z-index: 1;
            position: absolute;
            margin-top: 16px;
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
        }

        .lower-label {
            margin-left: calc(${thumbSize} / -2);
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
                    (rangeWidth * (doubleRangeValue.min - limits.min)) / (limits.max - limits.min),
                ),
                right: toPixel(
                    (rangeWidth * (limits.max - doubleRangeValue.max)) / (limits.max - limits.min),
                ),
            };

            const lowerLabel = makeLabel(doubleRangeValue.min, props.suffix);
            const upperLabel = makeLabel(doubleRangeValue.max, props.suffix);

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
                    <span class="lower-label label" style="left: ${progressBarPosition.left}">
                        ${lowerLabel}
                    </span>
                    <span class="upper-label label" style="right: ${progressBarPosition.right}">
                        ${upperLabel}
                    </span>
                    <div class="slider-wrapper">
                        <input
                            type="range"
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
                (rangeWidth * (limits.max - singleValue)) / (limits.max - limits.min),
            );

            const label = makeLabel(singleValue, props.suffix);

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
                    <span class="label" style="right: ${progressRightPosition}">${label}</span>
                    <input
                        type="range"
                        class="slider"
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

function isDoubleRangeValue(value: ToniqSliderValueType): value is ToniqSliderDoubleRangeValue {
    return isObject(value) && value.min !== undefined && value.max !== undefined;
}

function getRangeWidth(host: HTMLElement): number {
    const sliderElement = host.shadowRoot?.querySelector('.range');

    return sliderElement?.clientWidth ?? 0;
}

function makeLabel(value: number, suffix: string): string {
    return `${value} ${suffix}`;
}

function getCorrectedLimits({min, max}: {min: number; max: number}): {
    min: number;
    max: number;
} {
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
}: Readonly<{
    value: Readonly<ToniqSliderValueType>;
    double: boolean;
    min: number;
    max: number;
}>): ToniqSliderValueType {
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
