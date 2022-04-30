import {html, ToniqSvg} from '../../toniq-svg';
import {hugeIcpImageData} from '../huge-icp-image-data';

export const Icp24Icon = new ToniqSvg(html`
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path fill="url(#icp-24__a)" d="M0 0h24v24H0z" />
        <defs>
            <pattern id="icp-24__a" width="1" height="1" patternContentUnits="objectBoundingBox">
                <use xlink:href="#icp-24__b" transform="scale(.0005)" />
            </pattern>
            <image xlink:href="${hugeIcpImageData}" id="icp-24__b" width="2000" height="2000" />
        </defs>
    </svg>
`);
