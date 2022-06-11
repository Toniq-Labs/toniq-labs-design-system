import {css, html, onDomCreated, onResize} from 'element-vir';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqSlider = defineToniqElement({
    tagName: 'toniq-slider',
    props: {
        min: 0,
        max: 100,
        value: 0,
        range: false,
        suffix: '',
    },
    styles: css`
        .wrapper {
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

        .value {
            z-index: 1;
            position: absolute;
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
        }

        .slider {
            -webkit-appearance: none;
            width: 100%;
            background-color: transparent;
            margin: 0;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            height: 16px;
            width: 16px;
            z-index: 10;
            cursor: pointer;
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
        function onSliderCreated(slider: Element) {
            (slider as HTMLInputElement).value = props.value.toString();
            setProgress(props.value);
            slider.addEventListener('input', (event: Event) => {
                const value = parseInt((event.target as HTMLInputElement).value);
                setProgress(value);
            });
        }

        function onSliderResize(
            entry: Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
        ) {
            setProgress(parseInt((entry.target as HTMLInputElement).value));
        }

        function setProgress(value: number) {
            const slider = host.shadowRoot?.querySelector('.slider') as HTMLInputElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const labelValue = host.shadowRoot?.querySelector('.value') as HTMLElement;
            const sliderWidth = slider.clientWidth;

            const sliderOffset = (8 * value) / props.max;
            const progressOffset = ((value - props.min) * (0 - 8)) / (props.max - props.min) + 8;

            const progressWidth =
                (sliderWidth * valueMap(value, props.min, props.max, 0, props.max)) / props.max -
                sliderOffset;
            progress.style.width = `${progressWidth + progressOffset}px`;

            labelValue.innerHTML = `${slider.value} ${props.suffix}`;

            /*  Since the input range thumb is a pseudo element, the trick to getting its
             *  location is by getting the progress bar right location minus half of the
             *  label value width. Then set label value left to that computed value.
             */
            labelValue.style.left = `${
                progress.getBoundingClientRect().right - labelValue.offsetWidth / 2
            }px`;

            // Plus 16px (8px half of font size + 8px spacing from thumb to label based on design)
            labelValue.style.top = `${progress.getBoundingClientRect().top + 16}px`;
        }

        /* Re-maps a number from one range to another.
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

        if (props.range) {
            return html`
                <div class="wrapper">
                    <div class="progress"></div>
                    <span class="value"></span>
                    <input
                        type="range"
                        class="slider"
                        value=${props.value}
                        min=${props.min}
                        max=${props.max}
                        ${onDomCreated(onSliderCreated)}
                        ${onResize(onSliderResize)}
                    />
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
                <div class="wrapper">
                    <div class="progress"></div>
                    <span class="value"></span>
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
        }
    },
});
