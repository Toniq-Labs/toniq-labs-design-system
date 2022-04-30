import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const CircleDot24Icon = new ToniqSvg(html`
    <svg
        fill="none"
        stroke="${colorUsage.stroke}"
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
        <circle cx="12" cy="12" r="9" stroke-width="2" />
        <circle cx="12" cy="12" r="4" stroke="#000" stroke-width="2" />
    </svg>
`);
