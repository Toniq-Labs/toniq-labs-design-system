import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const ArrowLeft24Icon = new ToniqSvg(html`
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
        <path stroke-width="2" d="M5 12h14M5 12l6 6m-6-6 6-6" />
    </svg>
`);
