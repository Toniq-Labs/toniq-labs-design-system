import {html, ToniqSvg} from '../../toniq-svg';
import {hugeIcpImageData} from '../huge-icp-image-data';

export const Icp16Icon = new ToniqSvg(
    'Icp16Icon',
    html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path fill="url(#icp-16__a)" d="M0 0h16v16H0z" />
            <defs>
                <pattern
                    id="icp-16__a"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlink:href="#icp-16__b" transform="scale(.0005)" />
                </pattern>
                <image xlink:href="${hugeIcpImageData}" id="icp-16__b" width="2000" height="2000" />
            </defs>
        </svg>
    `,
);
