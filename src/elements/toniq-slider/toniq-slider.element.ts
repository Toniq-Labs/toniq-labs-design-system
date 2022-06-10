import {css, html} from 'element-vir';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

declare global {
    interface Window {
        sliderListenerAdded: boolean;
    }
}
window.sliderListenerAdded = window.sliderListenerAdded || false;

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
            margin: 32px 0px;
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
    renderCallback: ({props, host}) => {
        let slider: HTMLInputElement;

        // Use MutationObserver to check if element is already rendered in shadowDOM
        let observer = new MutationObserver((mutations: MutationRecord[]) => {
            let rendered = mutations.every((mutation) => {
                return host.shadowRoot?.querySelector('.slider');
            });

            if (rendered) {
                initElement();
                slider.addEventListener('input', (event: Event) => {
                    const value = parseInt((event.target as HTMLInputElement).value);
                    setProgress(value);
                    setValue();
                });
            }
        });
        observer.observe(host.renderRoot, {childList: true});

        function initElement() {
            slider = host.shadowRoot?.querySelector('.slider') as HTMLInputElement;
            slider.value = props.value.toString();
            setProgress(props.value);
            setValue();
        }

        function resizeProgress() {
            setProgress(parseInt(slider.value));
        }

        if (!window.dropdownListenerAdded) {
            window.addEventListener('resize', resizeProgress);
            window.dropdownListenerAdded = true;
        }

        function setProgress(value: number) {
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            const sliderWidth = slider.clientWidth;

            //TODO: Refactor to get the right width
            progress.style.width = Math.floor((sliderWidth * value) / props.max) + 'px';
        }

        function setValue() {
            const value = host.shadowRoot?.querySelector('.value') as HTMLElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;
            if (slider) {
                value.innerHTML = `${slider.value} ${props.suffix}`;

                /* To center value text we must get half of the text width plus half of the thumb width
                 *  then substract to the thumb location. Getting the thumb location is the same as getting
                 *  progress right location.
                 */
                value.style.left = `${Math.round(
                    progress.getBoundingClientRect().right - (value.offsetWidth / 2 + 8),
                )}px`;

                //Plus 8px spacing + 8px half of font size
                value.style.top = `${Math.round(progress.getBoundingClientRect().top) + 16}px`;
            }
        }

        if (props.range) {
            return html``;
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
                    />
                </div>
            `;
        }
    },
});
