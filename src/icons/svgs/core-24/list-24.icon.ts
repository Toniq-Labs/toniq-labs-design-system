import {toniqIconColors} from '../../../styles/icon-colors';
import {html, ToniqSvg} from '../../toniq-svg';

export const List24Icon = new ToniqSvg(
    'List24Icon',
    html`
        <svg
            fill="none"
            stroke="${toniqIconColors.stroke}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
        </svg>
    `,
);
