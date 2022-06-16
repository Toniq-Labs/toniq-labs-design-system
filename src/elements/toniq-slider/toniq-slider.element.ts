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
        min: 0,
        max: 100,
        value: 0 as number | ToniqSliderDoubleRangeValue,
        double: false,
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

        .labelValue {
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
                fillDualRangeSlider();
            } else {
                fillRangeSlider(parseInt((entry.target as HTMLInputElement).value));
            }
        }

        function fillRangeSlider(value: number) {
            const slider = host.shadowRoot?.querySelector('.slider') as HTMLInputElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const labelValue = host.shadowRoot?.querySelector('.labelValue') as HTMLElement;
            const sliderWidth = slider.clientWidth;

            const sliderOffset = (8 * value) / props.max;
            const progressOffset = ((value - props.min) * (0 - 8)) / (props.max - props.min) + 8;

            const progressWidth =
                (sliderWidth * valueMap(value, props.min, props.max, 0, props.max)) / props.max -
                sliderOffset;
            progress.style.width = `${progressWidth + progressOffset}px`;

            labelValue.innerHTML = `${slider.value} ${props.suffix}`;
            /**
             * Since the input range thumb is a pseudo element, the trick to getting its location is
             * by getting the progress bar right location minus half of the label value width. Then
             * set label value left to that computed value.
             */
            const labelValueOffset =
                progress.getBoundingClientRect().right - labelValue.offsetWidth / 2;

            labelValue.style.left = `${
                labelValueOffset < slider.getBoundingClientRect().left
                    ? slider.getBoundingClientRect().left
                    : labelValueOffset + labelValue.clientWidth >
                      slider.getBoundingClientRect().right
                    ? slider.getBoundingClientRect().right - labelValue.clientWidth
                    : labelValueOffset
            }px`;

            // Plus 16px (8px half of font size + 8px spacing from thumb to label based on design)
            labelValue.style.top = `${progress.getBoundingClientRect().top + 16}px`;
        }

        function fillDualRangeSlider() {
            const lowerSlider = host.shadowRoot?.querySelector('#lowerSlider') as HTMLInputElement;
            const upperSlider = host.shadowRoot?.querySelector('#upperSlider') as HTMLInputElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const lowerValue = host.shadowRoot?.querySelector('#lowerValue') as HTMLElement;
            const upperValue = host.shadowRoot?.querySelector('#upperValue') as HTMLElement;
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

            lowerValue.innerHTML = `${lowerSlider.value} ${props.suffix}`;
            upperValue.innerHTML = `${upperSlider.value} ${props.suffix}`;

            /**
             * Since the input range thumb is a pseudo element, the trick to getting its location is
             * by getting the progress bar right location minus half of the label value width. Then
             * set label value left to that computed value.
             */

            const lowerValueOffset = lowerSliderLeft - lowerValue.offsetWidth / 2;
            lowerValue.style.left = `${
                lowerValueOffset < lowerSlider.getBoundingClientRect().left
                    ? lowerSlider.getBoundingClientRect().left
                    : lowerValueOffset
            }px`;

            const upperValueOffset =
                progress.getBoundingClientRect().right - upperValue.offsetWidth / 2;
            upperValue.style.left = `${
                upperValueOffset + upperValue.clientWidth >
                upperSlider.getBoundingClientRect().right
                    ? upperSlider.getBoundingClientRect().right - upperValue.clientWidth
                    : upperValueOffset
            }px`;

            // Plus 16px (8px half of font size + 8px spacing from thumb to label based on design)
            lowerValue.style.top = `${progress.getBoundingClientRect().top + 16}px`;
            upperValue.style.top = `${progress.getBoundingClientRect().top + 16}px`;

            const valueOffset = 10;
            if (
                lowerValue.getBoundingClientRect().right + valueOffset >=
                    upperValue.getBoundingClientRect().left ||
                upperValue.getBoundingClientRect().left <= lowerValue.getBoundingClientRect().right
            ) {
                const lowerValueOffset =
                    progress.getBoundingClientRect().left -
                    lowerValue.getBoundingClientRect().width;
                const upperValueOffset = progress.getBoundingClientRect().right;
                const lowerValueMin = lowerSlider.getBoundingClientRect().left;

                const lowerValueMax =
                    lowerSlider.getBoundingClientRect().right -
                    upperValue.getBoundingClientRect().width -
                    lowerValue.getBoundingClientRect().width -
                    valueOffset;

                const upperValueMin =
                    upperSlider.getBoundingClientRect().left +
                    lowerValue.getBoundingClientRect().width +
                    valueOffset;
                const upperValueMax =
                    upperSlider.getBoundingClientRect().right -
                    upperValue.getBoundingClientRect().width;

                lowerValue.style.left = `${
                    lowerValueOffset < lowerValueMin
                        ? lowerValueMin
                        : lowerValueOffset > lowerValueMax
                        ? lowerValueMax
                        : lowerValueOffset
                }px`;
                upperValue.style.left = `${
                    upperValueOffset < upperValueMin
                        ? upperValueMin
                        : upperValueOffset > upperValueMax
                        ? upperValueMax
                        : upperValueOffset
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

            slider.addEventListener('input', (event: Event) => {
                if (props.double) {
                    fillDualRangeSlider();
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
            if (parseInt(lowerSlider.value) > parseInt(upperSlider.value) - 6) {
                upperSlider.value = `${parseInt(lowerSlider.value) + 6}`;

                if (parseInt(upperSlider.value) === parseInt(upperSlider.max)) {
                    lowerSlider.value = `${parseInt(upperSlider.max) - 6}`;
                }
            }
        }

        function upperSliderController() {
            const lowerSlider = host.shadowRoot?.querySelector('#lowerSlider') as HTMLInputElement;
            const upperSlider = host.shadowRoot?.querySelector('#upperSlider') as HTMLInputElement;

            if (parseInt(upperSlider.value) < parseInt(lowerSlider.value) + 6) {
                lowerSlider.value = `${parseInt(upperSlider.value) - 6}`;

                if (parseInt(lowerSlider.value) === parseInt(lowerSlider.min)) {
                    upperSlider.value = '6';
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
                    <span class="labelValue"></span>
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
                    <span id="lowerValue" class="labelValue"></span>
                    <span id="upperValue" class="labelValue"></span>
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
