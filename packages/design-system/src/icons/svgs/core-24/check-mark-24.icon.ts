import {toniqIconColors} from '../../../styles';
import {html, ToniqSvg} from '../../toniq-svg';

export const CheckMark24Icon = new ToniqSvg(
    'CheckMark24Icon',
    html`
        <svg
            fill="none"
            stroke="${toniqIconColors.stroke()}"
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
            <path stroke-width="2" d="m19 6-9 12-5-5" />
        </svg>
    `,
);
