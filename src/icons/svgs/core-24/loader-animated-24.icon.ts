import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const LoaderAnimated24Icon = new ToniqSvg(
    'LoaderAnimated24Icon',
    html`
        <style>
            @keyframes border-jump {
                0% {
                    opacity: 1;
                    stroke-width: 3px;
                }
                12.49% {
                    opacity: 1;
                    stroke-width: 3px;
                }
                12.5% {
                    opacity: 1;
                    stroke-width: 2px;
                }
                60% {
                    opacity: 0;
                    stroke-width: 2px;
                }
                99.99% {
                    opacity: 0;
                    stroke-width: 2px;
                }
            }

            .loader-animated-24-icon__svg path:nth-child(0) {
                animation: border-jump 1000ms 0ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(1) {
                animation: border-jump 1000ms 125ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(2) {
                animation: border-jump 1000ms 250ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(3) {
                animation: border-jump 1000ms 375ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(4) {
                animation: border-jump 1000ms 500ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(5) {
                animation: border-jump 1000ms 625ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(6) {
                animation: border-jump 1000ms 750ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(7) {
                animation: border-jump 1000ms 875ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(8) {
                animation: border-jump 1000ms 1000ms infinite linear;
            }
        </style>
        <svg
            class="loader-animated-24-icon__svg"
            fill="none"
            stroke="${colorUsage.stroke}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
        >
            <path stroke-width="1" opacity="0" d="M12 6V3" />
            <path stroke-width="1" opacity="0" d="M16.25 7.75 18.4 5.6" />
            <path stroke-width="1" opacity="0" d="M18 12h3" />
            <path stroke-width="1" opacity="0" d="m16.25 16.25 2.15 2.15" />
            <path stroke-width="1" opacity="0" d="M12 18v3" />
            <path stroke-width="1" opacity="0" d="M7.75 16.25 5.6 18.4" />
            <path stroke-width="1" opacity="0" d="M6 12H3" />
            <path stroke-width="1" opacity="0" d="M7.75 7.75 5.6 5.6" />
        </svg>
    `,
);
