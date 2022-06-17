import {css, html, onDomCreated, onResize} from 'element-vir';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export interface ToniqSliderDoubleRangeValue {
    min: number;
    max: number;
}

export const ToniqSlider = defineToniqElement({
    tagName: 'toniq-slider',
    props: {
        /** Use to programmatically set the default value. */
        value: 0 as number | ToniqSliderDoubleRangeValue,
        /**
         * Use to programmatically set the default min value. If the default value is lesser than
         * min. Then the default value will automatically be set to min.
         */
        min: 0,
        /**
         * Use to programmatically set the default max value. If the default value is greater than
         * max. Then the default value will automatically be set to max.
         */
        max: 100,
        /** Set to true to enable double range slider. */
        double: false,
        /** Use to add suffix to the value. */
        suffix: '',
    },
    styles: css`
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
            top: 16px;
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

        #lowerSlider,
        #upperSlider {
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
    initCallback: ({props, setProps}) => {
        setProps({value: props.value < props.min ? props.min : props.value});
    },
    renderCallback: ({props, host}) => {
        function onSliderResize(
            entry: Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
        ) {
            if (props.double) {
                fillDoubleRangeSlider();
            } else {
                fillRangeSlider(parseInt((entry.target as HTMLInputElement).value));
            }
        }

        function fillRangeSlider(value: number) {
            const slider = host.shadowRoot?.querySelector('.slider') as HTMLInputElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const label = host.shadowRoot?.querySelector('.label') as HTMLElement;
            const sliderWidth = slider.clientWidth;

            const sliderOffset = (8 * value) / props.max;
            const progressOffset = ((value - props.min) * (0 - 8)) / (props.max - props.min) + 8;

            const progressWidth =
                (sliderWidth * valueMap(value, props.min, props.max, 0, props.max)) / props.max -
                sliderOffset;
            progress.style.width = `${progressWidth + progressOffset}px`;

            label.innerHTML = `${slider.value} ${props.suffix}`;
            /**
             * Since the input range thumb is a pseudo element, the trick to getting its location is
             * by getting the progress bar right location minus half of the label value width. Then
             * set label value left to that computed value.
             */
            const labelOffset = progress.getBoundingClientRect().right - label.offsetWidth / 2;

            label.style.left = `${
                labelOffset < slider.getBoundingClientRect().left
                    ? slider.getBoundingClientRect().left
                    : labelOffset + label.clientWidth > slider.getBoundingClientRect().right
                    ? slider.getBoundingClientRect().right - label.clientWidth
                    : labelOffset
            }px`;

            // Plus 16px (8px half of font size + 8px spacing from thumb to label based on design)
            label.style.top = `${progress.getBoundingClientRect().top + 16}px`;
        }

        function fillDoubleRangeSlider() {
            const lowerSlider = host.shadowRoot?.querySelector('#lowerSlider') as HTMLInputElement;
            const upperSlider = host.shadowRoot?.querySelector('#upperSlider') as HTMLInputElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const lowerLabel = host.shadowRoot?.querySelector('#lowerLabel') as HTMLElement;
            const upperLabel = host.shadowRoot?.querySelector('#upperLabel') as HTMLElement;
            const lowerSliderWidth = lowerSlider.clientWidth;
            const upperSliderWidth = upperSlider.clientWidth;

            /** Get offset from range 24 to 8 as input ranges from min to max. */
            const lowerSliderOffset = valueMap(
                parseInt(lowerSlider.value),
                props.min,
                props.max,
                24,
                8,
            );
            const upperSliderOffset = valueMap(
                parseInt(upperSlider.value),
                props.min,
                props.max,
                24,
                8,
            );

            const lowerSliderLeft =
                (lowerSliderWidth *
                    valueMap(parseInt(lowerSlider.value), props.min, props.max, 0, props.max)) /
                    props.max +
                lowerSliderOffset;

            const upperSliderLeft =
                (upperSliderWidth *
                    valueMap(parseInt(upperSlider.value), props.min, props.max, 0, props.max)) /
                    props.max +
                upperSliderOffset;

            progress.style.left = lowerSliderLeft + 'px';
            progress.style.right = upperSliderLeft + 'px';
            progress.style.width = `${upperSliderLeft - lowerSliderLeft}px`;

            lowerLabel.innerHTML = `${lowerSlider.value} ${props.suffix}`;
            upperLabel.innerHTML = `${upperSlider.value} ${props.suffix}`;

            /**
             * Since the input range thumb is a pseudo element, the trick to getting its location is
             * by getting the progress bar right location minus half of the label value width. Then
             * set label value left to that computed value.
             */

            const lowerLabelOffset = lowerSliderLeft - lowerLabel.offsetWidth / 2;
            lowerLabel.style.left = `${
                lowerLabelOffset < lowerSlider.getBoundingClientRect().left
                    ? lowerSlider.getBoundingClientRect().left
                    : lowerLabelOffset
            }px`;

            const upperLabelOffset =
                progress.getBoundingClientRect().right - upperLabel.offsetWidth / 2;
            upperLabel.style.left = `${
                upperLabelOffset + upperLabel.clientWidth >
                upperSlider.getBoundingClientRect().right
                    ? upperSlider.getBoundingClientRect().right - upperLabel.clientWidth
                    : upperLabelOffset
            }px`;

            // Plus 16px (8px half of font size + 8px spacing from thumb to label based on design)
            lowerLabel.style.top = `${progress.getBoundingClientRect().top + 16}px`;
            upperLabel.style.top = `${progress.getBoundingClientRect().top + 16}px`;

            const valueOffset = 10;
            if (
                lowerLabel.getBoundingClientRect().right + valueOffset >=
                    upperLabel.getBoundingClientRect().left ||
                upperLabel.getBoundingClientRect().left <= lowerLabel.getBoundingClientRect().right
            ) {
                const lowerLabelOffset =
                    progress.getBoundingClientRect().left -
                    lowerLabel.getBoundingClientRect().width;
                const upperLabelOffset = progress.getBoundingClientRect().right;
                const lowerLabelMin = lowerSlider.getBoundingClientRect().left;

                const lowerLabelMax =
                    lowerSlider.getBoundingClientRect().right -
                    upperLabel.getBoundingClientRect().width -
                    lowerLabel.getBoundingClientRect().width -
                    valueOffset;

                const upperLabelMin =
                    upperSlider.getBoundingClientRect().left +
                    lowerLabel.getBoundingClientRect().width +
                    valueOffset;
                const upperLabelMax =
                    upperSlider.getBoundingClientRect().right -
                    upperLabel.getBoundingClientRect().width;

                lowerLabel.style.left = `${
                    lowerLabelOffset < lowerLabelMin
                        ? lowerLabelMin
                        : lowerLabelOffset > lowerLabelMax
                        ? lowerLabelMax
                        : lowerLabelOffset
                }px`;
                upperLabel.style.left = `${
                    upperLabelOffset < upperLabelMin
                        ? upperLabelMin
                        : upperLabelOffset > upperLabelMax
                        ? upperLabelMax
                        : upperLabelOffset
                }px`;
            }
        }

        function onSliderCreated(slider: Element) {
            const element = slider as HTMLInputElement;
            if (props.double && element.id === 'lowerSlider') {
                (slider as HTMLInputElement).value = `${
                    (props.value as ToniqSliderDoubleRangeValue).min
                }`;
            } else if (props.double && element.id === 'upperSlider') {
                (slider as HTMLInputElement).value = `${
                    (props.value as ToniqSliderDoubleRangeValue).max
                }`;
            } else {
                (slider as HTMLInputElement).value = props.value.toString();
            }

            slider.addEventListener('input', () => {
                if (props.double) {
                    fillDoubleRangeSlider();
                    if (element.id === 'lowerSlider') {
                        lowerSliderController();
                    } else {
                        upperSliderController();
                    }
                } else {
                    const value = parseInt(element.value);
                    fillRangeSlider(value);
                }
            });
        }

        function lowerSliderController() {
            const lowerSlider = host.shadowRoot?.querySelector('#lowerSlider') as HTMLInputElement;
            const upperSlider = host.shadowRoot?.querySelector('#upperSlider') as HTMLInputElement;
            if (parseInt(lowerSlider.value) > parseInt(upperSlider.value) - 2) {
                upperSlider.value = `${parseInt(lowerSlider.value) + 2}`;

                if (parseInt(upperSlider.value) === parseInt(upperSlider.max)) {
                    lowerSlider.value = `${parseInt(upperSlider.max) - 2}`;
                }
            }
        }

        function upperSliderController() {
            const lowerSlider = host.shadowRoot?.querySelector('#lowerSlider') as HTMLInputElement;
            const upperSlider = host.shadowRoot?.querySelector('#upperSlider') as HTMLInputElement;

            if (parseInt(upperSlider.value) < parseInt(lowerSlider.value) + 2) {
                lowerSlider.value = `${parseInt(upperSlider.value) - 2}`;

                if (parseInt(lowerSlider.value) === parseInt(lowerSlider.min)) {
                    upperSlider.value = '2';
                }
            }
        }

        /**
         * Re-maps a number from one range to another.
         * https://www.arduino.cc/reference/en/language/functions/math/map/
         */
        function valueMap(
            value: number,
            inMin: number,
            inMax: number,
            outMin: number,
            outMax: number,
        ) {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        }

        if (!props.double) {
            return html`
                <div class="range">
                    <div class="progress"></div>
                    <span class="label">${props.value} ${props.suffix}</span>
                    <input
                        type="range"
                        class="slider"
                        value=${props.value}
                        min=${props.min}
                        max=${props.max}
                        ${onDomCreated(onSliderCreated)}
                        ${onResize(onSliderResize)}
                    />
                </div>
            `;
        } else {
            return html`
                <div class="range">
                    <div class="progress"></div>
                    <span id="lowerLabel" class="label">
                        ${(props.value as ToniqSliderDoubleRangeValue).min} ${props.suffix}
                    </span>
                    <span id="upperLabel" class="label">
                        ${(props.value as ToniqSliderDoubleRangeValue).max} ${props.suffix}
                    </span>
                    <div class="slider-wrapper">
                        <input
                            id="lowerSlider"
                            type="range"
                            class="slider"
                            value=${(props.value as ToniqSliderDoubleRangeValue).min}
                            min=${props.min}
                            max=${props.max}
                            ${onDomCreated(onSliderCreated)}
                            ${onResize(onSliderResize)}
                        />
                        <input
                            id="upperSlider"
                            type="range"
                            class="slider"
                            value=${(props.value as ToniqSliderDoubleRangeValue).max}
                            min=${props.min}
                            max="${props.max}"
                            ${onDomCreated(onSliderCreated)}
                            ${onResize(onSliderResize)}
                        />
                    </div>
                </div>
            `;
        }
    },
});
