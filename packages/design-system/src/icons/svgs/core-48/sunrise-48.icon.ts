import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Sunrise48Icon = defineIcon({
    name: 'Sunrise48Icon',
    svgTemplate: html`
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="M6 26h2m32 0h2M11.2 13.2l1.4 1.4m24.2-1.4-1.4 1.4M16 26a8 8 0 0 1 16 0M6 34h36m-28 6h10m8 0h2M24 10V8"
                />
            </g>
        </svg>
    `,
});
