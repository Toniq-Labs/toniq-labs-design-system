import {toniqIconColors} from '../../../styles/icon-colors';
import {html, ToniqSvg} from '../../toniq-svg';

export const ChevronDown24Icon = new ToniqSvg(
    'ChevronDown24Icon',
    html`
        <svg
            fill="none"
            stroke="${toniqIconColors.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
            />
        </svg>
    `,
);
