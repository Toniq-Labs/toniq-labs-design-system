import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const InfoCircle16Icon = new ToniqSvg(html`
    <svg
        fill="none"
        stroke="${colorUsage.stroke}"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="16"
        height="16"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        clip-rule="evenodd"
        viewBox="0 0 16 16"
    >
        <path
            fill="none"
            stroke="#000"
            stroke-width="2"
            d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
        />
    </svg>
`);
