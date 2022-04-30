import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const HeartOutline24Icon = new ToniqSvg(html`
    <svg
        fill="none"
        stroke="${colorUsage.stroke}"
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="24"
        height="24"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 24 24"
    >
        <path
            stroke-width="2"
            d="m19.51 13.58-7.5 7.43-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57"
        />
    </svg>
`);
