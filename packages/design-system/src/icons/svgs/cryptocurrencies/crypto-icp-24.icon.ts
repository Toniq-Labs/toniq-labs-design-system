import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {icpSvgImage, icpSvgImageViewBox} from '../icp-svg-image';

export const CryptoIcp24Icon = defineIcon({
    name: 'CryptoIcp24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${icpSvgImageViewBox}"
        >
            ${icpSvgImage}
        </svg>
    `,
});
