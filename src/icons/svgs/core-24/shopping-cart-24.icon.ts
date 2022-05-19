import {toniqIconColors} from '../../../styles/icon-colors';
import {html, ToniqSvg} from '../../toniq-svg';

export const ShoppingCart24Icon = new ToniqSvg(
    'ShoppingCart24Icon',
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
            <path
                stroke-width="2"
                d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm11 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0H6V3H4m2 2 14 1-1 7H6"
            />
        </svg>
    `,
);
