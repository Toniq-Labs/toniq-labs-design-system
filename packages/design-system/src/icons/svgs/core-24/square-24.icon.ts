import {toniqIconColors} from '../../../styles/icon-colors';
import {html, ToniqSvg} from '../../toniq-svg';

export const Square24Icon = new ToniqSvg(
    'Square24Icon',
    html`
        <svg
            fill="none"
            stroke="${toniqIconColors.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                width="16"
                height="16"
                x="4"
                y="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                rx="2"
            />
        </svg>
    `,
);
