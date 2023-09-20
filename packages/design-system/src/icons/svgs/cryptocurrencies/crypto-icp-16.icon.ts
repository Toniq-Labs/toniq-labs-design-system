import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {icpSvgImage, icpSvgImageViewBox} from '../icp-svg-image';

export const CryptoIcp16Icon = defineIcon({
    name: 'CryptoIcp16Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            stroke="none"
            fill="none"
            width="16"
            height="16"
            viewBox="${icpSvgImageViewBox}"
        >
            ${icpSvgImage}
        </svg>
    `,
});
