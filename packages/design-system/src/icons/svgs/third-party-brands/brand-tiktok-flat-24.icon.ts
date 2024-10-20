import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVarWithFallback} from '../../../styles/icon-css-vars';

export const BrandTiktokFlat24Icon = defineIcon({
    name: 'BrandTiktokFlat24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${toniqIconCssVarWithFallback['toniq-icon-fill-color']('#000')}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `,
});
