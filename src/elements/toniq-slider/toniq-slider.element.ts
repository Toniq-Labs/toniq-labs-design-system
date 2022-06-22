import {css, defineElementEvent, html, listen, onDomCreated, onResize} from 'element-vir';
import {mapRange} from '../../augments/number';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
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
        referenceElements: undefined as undefined | ToniqSliderReferenceElements,
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
        }

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

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            height: 16px;
            width: 16px;
            z-index: 10;
            cursor: pointer;
            pointer-events: all;
            border-radius: 10px;
            transition: ${interactionDuration};
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
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
        const doubleSliderOffset = 2;

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
                setProps({
                    value: {
                        min:
                            props.value.min < props.min
                                ? props.min
                                : props.value.min > props.max
                                ? props.max
                                : parseInt(lowerSliderElement.value) !== defaultMin
                                ? parseInt(lowerSliderElement.value)
                                : props.value.min,
                        max:
                            props.value.max < props.min
                                ? props.min
                                : props.value.max > props.max
                                ? props.max
                                : parseInt(upperSliderElement.value) !== defaultMax
                                ? parseInt(upperSliderElement.value)
                                : props.value.max,
                    },
                });
            }

            fillDoubleRangeSlider();
        } else {
            setProps({
                value:
                    props.value < props.min
                        ? props.min
                        : props.value > props.max
                        ? props.max
                        : props.value,
            });

            if (
                !isDoubleRangeValue(props.value) &&
                slider instanceof HTMLInputElement &&
                progress instanceof HTMLElement &&
                label instanceof HTMLElement
            ) {
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

                progress.style.width = `${
                    (sliderWidth * mapRange(value, props.min, props.max, 0, props.max)) /
                        props.max -
                    sliderOffset +
                    progressOffset
                }px`;
                label.innerHTML = `${props.value} ${props.suffix}`;
                /**
                 * Since the input range thumb is a pseudo element, the trick to getting its
                 * location is by getting the progress bar right location minus half of the label
                 * value width. Then set label value left to that computed value.
                 */
                const labelOffset = progress.getBoundingClientRect().right - label.offsetWidth / 2;

                label.style.left = `${
                    labelOffset < slider.getBoundingClientRect().left
                        ? slider.getBoundingClientRect().left
                        : labelOffset + label.clientWidth > slider.getBoundingClientRect().right
                        ? slider.getBoundingClientRect().right - label.clientWidth
                        : labelOffset
                }px`;
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

                /** Get offset from range 24 to 8 as input ranges from min to max. */
                const lowerSliderOffset = mapRange(props.value.min, props.min, props.max, 24, 8);
                const upperSliderOffset = mapRange(props.value.max, props.min, props.max, 24, 8);

                const lowerSliderLeft =
                    (lowerSliderWidth *
                        mapRange(props.value.min, props.min, props.max, 0, props.max)) /
                        props.max +
                    lowerSliderOffset;

                const upperSliderLeft =
                    (upperSliderWidth *
                        mapRange(props.value.max, props.min, props.max, 0, props.max)) /
                        props.max +
                    upperSliderOffset;

                progress.style.left = lowerSliderLeft + 'px';
                progress.style.right = upperSliderLeft + 'px';
                progress.style.width = `${upperSliderLeft - lowerSliderLeft}px`;

                lowerLabelElement.innerHTML = `${props.value.min} ${props.suffix}`;
                upperLabelElement.innerHTML = `${props.value.max} ${props.suffix}`;

                /**
                 * Since the input range thumb is a pseudo element, the trick to getting its
                 * location is by getting the progress bar right location minus half of the label
                 * value width. Then set label value left to that computed value.
                 */

                const lowerLabelOffset = lowerSliderLeft - lowerLabelElement.offsetWidth / 2;
                lowerLabelElement.style.left = `${
                    lowerLabelOffset < lowerSliderElement.getBoundingClientRect().left
                        ? lowerSliderElement.getBoundingClientRect().left
                        : lowerLabelOffset
                }px`;

                const upperLabelOffset =
                    progress.getBoundingClientRect().right - upperLabelElement.offsetWidth / 2;
                upperLabelElement.style.left = `${
                    upperLabelOffset + upperLabelElement.clientWidth >
                    upperSliderElement.getBoundingClientRect().right
                        ? upperSliderElement.getBoundingClientRect().right -
                          upperLabelElement.clientWidth
                        : upperLabelOffset
                }px`;

                const valueOffset = 10;
                if (
                    lowerLabelElement.getBoundingClientRect().right + valueOffset >=
                        upperLabelElement.getBoundingClientRect().left ||
                    upperLabelElement.getBoundingClientRect().left <=
                        lowerLabelElement.getBoundingClientRect().right
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
                        valueOffset;

                    const upperLabelMin =
                        upperSliderElement.getBoundingClientRect().left +
                        lowerLabelElement.getBoundingClientRect().width +
                        valueOffset;
                    const upperLabelMax =
                        upperSliderElement.getBoundingClientRect().right -
                        upperLabelElement.getBoundingClientRect().width;

                    lowerLabelElement.style.left = `${
                        lowerLabelOffset < lowerLabelMin
                            ? lowerLabelMin
                            : lowerLabelOffset > lowerLabelMax
                            ? lowerLabelMax
                            : lowerLabelOffset
                    }px`;
                    upperLabelElement.style.left = `${
                        upperLabelOffset < upperLabelMin
                            ? upperLabelMin
                            : upperLabelOffset > upperLabelMax
                            ? upperLabelMax
                            : upperLabelOffset
                    }px`;
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
                    <div class="progress"></div>
                    <span class="lowerLabel label"></span>
                    <span class="upperLabel label"></span>
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
                    <div class="progress"></div>
                    <span class="label">${props.suffix}</span>
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
