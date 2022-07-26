import {html, ToniqSvg} from '../../toniq-svg';
import {icpSvgImage, icpSvgImageViewBox} from '../icp-svg-image';

export const Icp24Icon = new ToniqSvg(
    'Icp24Icon',
    html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${icpSvgImageViewBox}"
        >
            ${icpSvgImage}
        </svg>
        </svg>
    `,
);
