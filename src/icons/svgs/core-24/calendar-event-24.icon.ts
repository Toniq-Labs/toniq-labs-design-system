import {html, ToniqSvg} from '../../toniq-svg';
import {colorUsage} from '../../toniq-svg-colors';

export const CalendarEvent24Icon = new ToniqSvg(html`
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
        <path
            stroke-width="2"
            d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
        />
    </svg>
`);
