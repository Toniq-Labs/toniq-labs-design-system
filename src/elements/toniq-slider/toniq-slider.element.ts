import {css, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqSlider = defineToniqElement({
    tagName: 'toniq-slider',
    props: {
        min: 0,
        max: 100,
    },
    styles: css`
        :host {
            display: flex;
        }

        .container {
            position: absolute;
        }

        /* TODO: slider width should be auto */
        .input-slider {
            -webkit-appearance: none;
            width: 400px;
            background-color: transparent;
        }

        /* TODO: slider width should be auto */
        .input-slider::after {
            position: absolute;
            height: 8px;
            width: 400px;
            z-index: 1;
            margin: -4px 0 0 0;
            content: '';
            border-radius: 4px;
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            width: calc(400px * 0.5);
            z-index: 2;
            pointer-events: none;
            margin: 3px 2px;
            content: '';
            border-radius: 4px 0 0 4px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .input-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            height: 16px;
            width: 16px;
            z-index: 10;
            cursor: pointer;
            margin: -8px 0 0 0;
            border-radius: 10px;
            transition: 0.2s;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .input-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }
    `,
    renderCallback: ({props, host}) => {
        const minValue = props.min;
        const maxValue = props.max;

        // Query elements after shadowRoot has rendered
        setTimeout(() => {
            const slider = host.shadowRoot?.querySelector('.input-slider') as HTMLElement;
            const progress = host.shadowRoot?.querySelector('.progress') as HTMLElement;

            slider.addEventListener('input', (event: Event) => {
                const value = parseInt((event.target as HTMLInputElement).value);
                // TODO: Get Slider width value instead of 400
                progress.style.width = (400 * value) / maxValue + 'px';
                console.log(value);
            });
        }, 500);

        return html`
            <div class="container">
                <div class="slider">
                    <div class="progress"></div>
                    <input type="range" class="input-slider" min=${minValue} max=${maxValue} />
                </div>
            </div>
        `;
    },
});
