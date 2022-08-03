import {css, defineElementEvent, html, listen, onDomCreated, onResize} from 'element-vir';
import {clamp, mapRange} from '../../augments/number';
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

const thumbStyle = css`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: 16px;
    width: 16px;
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
        value: 0 as number | ToniqSliderDoubleRangeValue,
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
        /**
         * This is used to grab the position of the reference elements. Warning: externally
         * overriding this will cause weird things to happen!
         */
        referenceElements: undefined as undefined | ToniqSliderReferenceElements,
        /**
         * This is use to declaratively set the progress bar styling. Warning: externally overriding
         * this will cause weird things to happen!
         */
        progressStyle: {
            width: '0px',
            left: '0px',
            right: '0px',
        } as ToniqSliderProgressStyle,
        /**
         * This is use to declaratively set the label styling for single range slider. Warning:
         * externally overriding this will cause weird things to happen!
         */
        labelStyle: {
            innerText: '',
            left: '0px',
        } as ToniqSliderLabelStyle,
        /**
         * This is use to declaratively set the lower label styling for double range slider.
         * Warning: externally overriding this will cause weird things to happen!
         */
        lowerLabelStyle: {
            innerText: '',
            left: '0px',
        } as ToniqSliderLabelStyle,
        /**
         * This is use to declaratively set the upper label styling for double range slider.
         * Warning: externally overriding this will cause weird things to happen!
         */
        upperLabelStyle: {
            innerText: '',
            left: '0px',
        } as ToniqSliderLabelStyle,
    },
    events: {
        valueChange: defineElementEvent<number | ToniqSliderDoubleRangeValue>(),
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

        .lowerSlider,
        .upperSlider {
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
        const progress = props.referenceElements?.progress;
        const slider = props.referenceElements?.slider;
        const label = props.referenceElements?.label;
        const lowerSliderElement = props.referenceElements?.lowerSlider;
        const upperSliderElement = props.referenceElements?.upperSlider;
        const lowerLabelElement = props.referenceElements?.lowerLabel;
        const upperLabelElement = props.referenceElements?.upperLabel;
        const doubleSliderOffset = 1;

        if (props.double) {
            if (!isDoubleRangeValue(props.value)) {
                setProps({
                    value: {
                        min: props.min,
                        max: props.max,
                    },
                });
            } else if (
                lowerSliderElement instanceof HTMLInputElement &&
                upperSliderElement instanceof HTMLInputElement
            ) {
                const defaultMin = 0;
                const defaultMax = 100;

                const initValue = {
                    min: clamp(
                        parseInt(lowerSliderElement.value) !== defaultMin
                            ? parseInt(lowerSliderElement.value)
                            : props.value.min,
                        props.min,
                        props.max,
                    ),
                    max: clamp(
                        parseInt(upperSliderElement.value) !== defaultMax
                            ? parseInt(upperSliderElement.value)
                            : props.value.max,
                        props.min,
                        props.max,
                    ),
                };
                setProps({
                    value: initValue,
                    lowerLabelStyle: {
                        innerText: `${initValue.min} ${props.suffix}`,
                    },
                    upperLabelStyle: {
                        innerText: `${initValue.max} ${props.suffix}`,
                    },
                });
            }

            fillDoubleRangeSlider();
        } else {
            if (!isDoubleRangeValue(props.value)) {
                const initValue = clamp(props.value, props.min, props.max);
                setProps({
                    value: initValue,
                    labelStyle: {
                        innerText: `${initValue} ${props.suffix}`,
                    },
                });
                fillRangeSlider(props.value);
            }
        }

        function onSliderResize(
            entry: Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
        ) {
            if (props.double) {
                fillDoubleRangeSlider();
            } else {
                if (entry.target instanceof HTMLInputElement)
                    fillRangeSlider(parseInt(entry.target.value));
            }
        }

        function fillRangeSlider(value: number) {
            if (
                slider instanceof HTMLInputElement &&
                progress instanceof HTMLElement &&
                label instanceof HTMLElement
            ) {
                const sliderWidth = slider.clientWidth;

                const thumbOffset = 8;
                const inputRangeOffsetRange = {
                    min: 0,
                    max: 8,
                };
                const sliderOffset = (thumbOffset * value) / props.max;
                const progressOffset =
                    ((value - props.min) *
                        (inputRangeOffsetRange.min - inputRangeOffsetRange.max)) /
                        (props.max - props.min) +
                    thumbOffset;

                const progressCalculatedWidth =
                    (sliderWidth * mapRange(value, props.min, props.max, 0, props.max)) /
                        props.max -
                    sliderOffset +
                    progressOffset;

                setProps({
                    progressStyle: {
                        width: `${progressCalculatedWidth}px`,
                    },
                });

                /**
                 * Since the input range thumb is a pseudo element, the trick to getting its
                 * location is by getting the progress bar right location minus half of the label
                 * value width. Then set label value left to that computed value.
                 */
                const labelOffset =
                    progress.getBoundingClientRect().left +
                    progressCalculatedWidth -
                    label.offsetWidth / 2;

                setProps({
                    labelStyle: {
                        innerText: `${props.value} ${props.suffix}`,
                        left: `${
                            labelOffset < slider.getBoundingClientRect().left
                                ? slider.getBoundingClientRect().left
                                : labelOffset + label.clientWidth >
                                  slider.getBoundingClientRect().right
                                ? slider.getBoundingClientRect().right - label.clientWidth
                                : labelOffset
                        }px`,
                    },
                });
            }
        }

        function fillDoubleRangeSlider() {
            if (
                progress instanceof HTMLElement &&
                lowerSliderElement instanceof HTMLInputElement &&
                upperSliderElement instanceof HTMLInputElement &&
                lowerLabelElement instanceof HTMLElement &&
                upperLabelElement instanceof HTMLElement &&
                isDoubleRangeValue(props.value)
            ) {
                const lowerSliderWidth = lowerSliderElement.clientWidth;
                const upperSliderWidth = upperSliderElement.clientWidth;

                const lowerSliderLeft =
                    (lowerSliderWidth *
                        mapRange(props.value.min, props.min, props.max, 0, props.max)) /
                        props.max;

                const upperSliderLeft =
                    (upperSliderWidth *
                        mapRange(props.value.max, props.min, props.max, 0, props.max)) /
                        props.max;

                setProps({
                    progressStyle: {
                        width: `${upperSliderLeft - lowerSliderLeft}px`,
                        left: lowerSliderLeft + 'px',
                        right: upperSliderLeft + 'px',
                    },
                });

                /**
                 * Since the input range thumb is a pseudo element, the trick to getting its
                 * location is by getting the progress bar right location minus half of the label
                 * value width. Then set label value left to that computed value.
                 */

                const lowerLabelOffset = lowerSliderLeft - lowerLabelElement.offsetWidth / 2;
                const upperLabelOffset =
                    progress.getBoundingClientRect().right - upperLabelElement.offsetWidth / 2;

                const lowerLabelCalculatedLeft = Math.max(
                    lowerLabelOffset,
                    lowerSliderElement.getBoundingClientRect().left,
                );
                const upperLabelCalculatedLeft =
                    upperLabelOffset + upperLabelElement.clientWidth >
                    upperSliderElement.getBoundingClientRect().right
                        ? upperSliderElement.getBoundingClientRect().right -
                          upperLabelElement.clientWidth
                        : upperLabelOffset;
                setProps({
                    lowerLabelStyle: {
                        innerText: `${props.value.min} ${props.suffix}`,
                        left: `${lowerLabelCalculatedLeft}px`,
                    },
                    upperLabelStyle: {
                        innerText: `${props.value.max} ${props.suffix}`,
                        left: `${upperLabelCalculatedLeft}px`,
                    },
                });

                /** Offset in px between two labels if the thumbs are close to each other. */
                const labelsOffset = 10;
                if (
                    lowerLabelCalculatedLeft + lowerLabelElement.offsetWidth + labelsOffset >=
                        upperLabelCalculatedLeft ||
                    upperLabelCalculatedLeft <=
                        lowerLabelCalculatedLeft + lowerLabelElement.offsetWidth
                ) {
                    const lowerLabelOffset =
                        progress.getBoundingClientRect().left -
                        lowerLabelElement.getBoundingClientRect().width;
                    const upperLabelOffset = progress.getBoundingClientRect().right;
                    const lowerLabelMin = lowerSliderElement.getBoundingClientRect().left;

                    const lowerLabelMax =
                        lowerSliderElement.getBoundingClientRect().right -
                        upperLabelElement.getBoundingClientRect().width -
                        lowerLabelElement.getBoundingClientRect().width -
                        labelsOffset;

                    const upperLabelMin =
                        upperSliderElement.getBoundingClientRect().left +
                        lowerLabelElement.getBoundingClientRect().width +
                        labelsOffset;
                    const upperLabelMax =
                        upperSliderElement.getBoundingClientRect().right -
                        upperLabelElement.getBoundingClientRect().width;

                    setProps({
                        lowerLabelStyle: {
                            innerText: `${props.value.min} ${props.suffix}`,
                            left: `${clamp(lowerLabelOffset, lowerLabelMin, lowerLabelMax)}px`,
                        },
                        upperLabelStyle: {
                            innerText: `${props.value.max} ${props.suffix}`,
                            left: `${clamp(upperLabelOffset, upperLabelMin, upperLabelMax)}px`,
                        },
                    });
                }
            }
        }

        function lowerSliderController() {
            if (
                lowerSliderElement instanceof HTMLInputElement &&
                upperSliderElement instanceof HTMLInputElement &&
                parseInt(lowerSliderElement.value) >
                    parseInt(upperSliderElement.value) - doubleSliderOffset
            ) {
                upperSliderElement.value = `${
                    parseInt(lowerSliderElement.value) + doubleSliderOffset
                }`;

                if (parseInt(upperSliderElement.value) === parseInt(upperSliderElement.max)) {
                    lowerSliderElement.value = `${
                        parseInt(upperSliderElement.max) - doubleSliderOffset
                    }`;
                }
            }
        }

        function upperSliderController() {
            if (
                lowerSliderElement instanceof HTMLInputElement &&
                upperSliderElement instanceof HTMLInputElement &&
                parseInt(upperSliderElement.value) <
                    parseInt(lowerSliderElement.value) + doubleSliderOffset
            ) {
                lowerSliderElement.value = `${
                    parseInt(upperSliderElement.value) - doubleSliderOffset
                }`;

                if (parseInt(lowerSliderElement.value) === parseInt(lowerSliderElement.min)) {
                    upperSliderElement.value = `${doubleSliderOffset}`;
                }
            }
        }

        function isDoubleRangeValue(
            value: number | ToniqSliderDoubleRangeValue,
        ): value is ToniqSliderDoubleRangeValue {
            return (
                (value as ToniqSliderDoubleRangeValue).min !== undefined &&
                (value as ToniqSliderDoubleRangeValue).max !== undefined
            );
        }

        if (props.double && isDoubleRangeValue(props.value)) {
            return html`
                <div class="range">
                    <div
                        class="progress"
                        style="width:${props.progressStyle.width}; left:${props.progressStyle
                            .left}; right:${props.progressStyle.right}"
                    ></div>
                    <span class="lowerLabel label" style="left:${props.lowerLabelStyle.left}">
                        ${props.lowerLabelStyle.innerText}
                    </span>
                    <span class="upperLabel label" style="left:${props.upperLabelStyle.left}">
                        ${props.upperLabelStyle.innerText}
                    </span>
                    <div class="slider-wrapper">
                        <input
                            type="range"
                            class="lowerSlider slider"
                            .value=${props.value.min}
                            .min=${props.min}
                            .max=${props.max}
                            ${onDomCreated((element) => {
                                const progress = host.shadowRoot?.querySelector('.progress');
                                const lowerSlider = host.shadowRoot?.querySelector('.lowerSlider');
                                const lowerLabel = host.shadowRoot?.querySelector('.lowerLabel');
                                const upperSlider = host.shadowRoot?.querySelector('.upperSlider');
                                const upperLabel = host.shadowRoot?.querySelector('.upperLabel');

                                if (
                                    progress instanceof HTMLElement &&
                                    lowerSlider instanceof HTMLInputElement &&
                                    upperSlider instanceof HTMLInputElement &&
                                    lowerLabel instanceof HTMLElement &&
                                    upperLabel instanceof HTMLElement
                                ) {
                                    setProps({
                                        referenceElements: {
                                            progress,
                                            lowerSlider,
                                            lowerLabel,
                                            upperSlider,
                                            upperLabel,
                                        },
                                    });
                                }

                                if (!(element instanceof HTMLInputElement)) {
                                    throw new Error(`Failed to get input element in listener`);
                                }

                                if (isDoubleRangeValue(props.value)) {
                                    element.value = `${props.value.min}`;
                                }
                            })}
                            ${onResize(onSliderResize)}
                            ${listen('input', (event) => {
                                if (
                                    event.target instanceof HTMLInputElement &&
                                    upperSliderElement instanceof HTMLInputElement
                                ) {
                                    const value = {
                                        min: parseInt(event.target.value),
                                        max: parseInt(upperSliderElement.value),
                                    };
                                    setProps({value});
                                }
                                fillDoubleRangeSlider();
                                lowerSliderController();
                            })}
                            ${listen('change', (event) => {
                                if (
                                    event.target instanceof HTMLInputElement &&
                                    upperSliderElement instanceof HTMLInputElement
                                ) {
                                    const value = {
                                        min: parseInt(event.target.value),
                                        max: parseInt(upperSliderElement.value),
                                    };
                                    setProps({value});
                                    dispatch(new events.valueChange(value));
                                }
                            })}
                        />
                        <input
                            type="range"
                            class="upperSlider slider"
                            .value=${props.value.max}
                            .min=${props.min}
                            .max="${props.max}"
                            ${onDomCreated((element) => {
                                if (element instanceof HTMLInputElement) {
                                    if (isDoubleRangeValue(props.value)) {
                                        element.value = `${props.value.max}`;
                                    }
                                } else {
                                    throw new Error(`Failed to get input element in listener`);
                                }
                            })}
                            ${onResize(onSliderResize)}
                            ${listen('input', (event) => {
                                if (
                                    event.target instanceof HTMLInputElement &&
                                    lowerSliderElement instanceof HTMLInputElement
                                ) {
                                    const value = {
                                        min: parseInt(lowerSliderElement.value),
                                        max: parseInt(event.target.value),
                                    };
                                    setProps({value});
                                }
                                fillDoubleRangeSlider();
                                upperSliderController();
                            })}
                            ${listen('change', (event) => {
                                if (
                                    event.target instanceof HTMLInputElement &&
                                    lowerSliderElement instanceof HTMLInputElement
                                ) {
                                    const value = {
                                        min: parseInt(lowerSliderElement.value),
                                        max: parseInt(event.target.value),
                                    };
                                    setProps({value});
                                    dispatch(new events.valueChange(value));
                                }
                            })}
                        />
                    </div>
                </div>
            `;
        } else {
            return html`
                <div class="range">
                    <div class="progress" style="width:${props.progressStyle.width}"></div>
                    <span class="label" style="left:${props.labelStyle.left}">
                        ${props.labelStyle.innerText}
                    </span>
                    <input
                        type="range"
                        class="slider"
                        .value=${props.value}
                        .min=${props.min}
                        .max=${props.max}
                        ${onDomCreated((element) => {
                            const progressElement = host.shadowRoot?.querySelector('.progress');
                            const sliderElement = host.shadowRoot?.querySelector('.slider');
                            const labelElement = host.shadowRoot?.querySelector('.label');

                            if (
                                sliderElement instanceof HTMLInputElement &&
                                progressElement instanceof HTMLElement &&
                                labelElement instanceof HTMLElement
                            ) {
                                setProps({
                                    referenceElements: {
                                        slider: sliderElement,
                                        progress: progressElement,
                                        label: labelElement,
                                    },
                                });
                            }

                            if (!(element instanceof HTMLInputElement)) {
                                throw new Error(`Failed to get input element in listener`);
                            }
                            fillRangeSlider(parseInt(element.value));
                        })}
                        ${onResize(onSliderResize)}
                        ${listen('input', (event) => {
                            if (!(event.target instanceof HTMLInputElement)) {
                                throw new Error(`Failed to get input element in listener`);
                            }
                            setProps({value: parseInt(event.target.value)});
                            fillRangeSlider(parseInt(event.target.value));
                        })}
                        ${listen('change', (event) => {
                            if (event.target instanceof HTMLInputElement) {
                                dispatch(new events.valueChange(parseInt(event.target.value)));
                                setProps({value: parseInt(event.target.value)});
                            }
                        })}
                    />
                </div>
            `;
        }
    },
});
