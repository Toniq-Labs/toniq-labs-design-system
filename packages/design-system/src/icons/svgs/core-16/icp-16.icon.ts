import {html, ToniqSvg} from '../../toniq-svg';
import {icpSvgImage, icpSvgImageViewBox} from '../icp-svg-image';

export const Icp16Icon = new ToniqSvg(
    'Icp16Icon',
    html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${icpSvgImageViewBox}"
        >
            ${icpSvgImage}
        </svg>
    `,
);
