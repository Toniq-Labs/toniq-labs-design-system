import {css, html} from 'element-vir';
import {interactionDuration} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqSlider = defineToniqElement({
    tagName: 'toniq-slider',
    props: {
        min: 0,
        max: 100,
        value: 0,
    },
    styles: css`
        :host {
            display: flex;
        }

        .slider {
            position: absolute;
        }

        /* TODO: slider width should be auto */
        .input-slider {
            -webkit-appearance: none;
            width: 400px;
            background-color: transparent;
            margin: 0;
        }

        /* TODO: slider width should be auto */
        .input-slider::after {
            content: '';
            position: absolute;
            height: 8px;
            width: 400px;
            z-index: 1;
            border-radius: 4px;
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        .progress {
            content: '';
            position: absolute;
            height: 8px;
            width: 0;
            z-index: 2;
            pointer-events: none;
            margin-top: 3px;
            border-radius: 4px 0px 0px 4px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .input-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            height: 16px;
            width: 16px;
            z-index: 10;
            cursor: pointer;
            border-radius: 10px;
            margin-top: -4px;
            transition: ${interactionDuration};
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .input-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }
    `,
    renderCallback: ({props, host}) => {
        const value =
            props.value > props.max ? props.max : props.value < props.min ? props.min : props.value;
        const minValue = props.min;
        const maxValue = props.max;

        const setProgress = (value: number) => {
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;

            // TODO: Get Slider width value instead of 400
            progress.style.width = Math.floor((392 * value) / maxValue) + 'px';
            console.log(value);
        };

        // Query elements after shadowRoot has rendered
        setTimeout(() => {
            const slider = host.shadowRoot?.querySelector('.input-slider') as HTMLInputElement;
            slider.value = props.value.toString();
            setProgress(value);

            slider.addEventListener('input', (event: Event) => {
                const value = parseInt((event.target as HTMLInputElement).value);
                // TODO: Get Slider width value instead of 400
                setProgress(value);
            });
        }, 250);

        return html`
            <div class="slider">
                <div class="progress"></div>
                <input
                    type="range"
                    class="input-slider"
                    value=${value}
                    min=${minValue}
                    max=${maxValue}
                />
            </div>
        `;
    },
});
