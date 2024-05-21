import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const CheckMark16Icon = defineIcon({
    name: 'CheckMark16Icon',
    svgTemplate: html`
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m3.333 8 3.334 3.333 6.666-6.667"
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `,
});
