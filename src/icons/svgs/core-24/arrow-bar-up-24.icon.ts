import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const ArrowBarUp24Icon = new ToniqSvg(html`
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="24"
        height="24"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        fill="none"
        stroke="${colorUsage.stroke}"
        clip-rule="evenodd"
        viewBox="0 0 24 24"
    >
        <path stroke-width="2" d="M12 14V4L8 8m4-4 4 4" />
        <path stroke-miterlimit="4" stroke-width="2" d="M4 20h16" />
    </svg>
`);
