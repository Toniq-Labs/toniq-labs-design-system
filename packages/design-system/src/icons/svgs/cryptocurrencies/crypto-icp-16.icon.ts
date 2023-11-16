import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {icpSvgImage, icpSvgImageViewBox} from '../icp-svg-image';

export const CryptoIcp16Icon = defineIcon({
    name: 'CryptoIcp16Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${icpSvgImageViewBox}"
        >
            ${icpSvgImage}
        </svg>
    `,
});
