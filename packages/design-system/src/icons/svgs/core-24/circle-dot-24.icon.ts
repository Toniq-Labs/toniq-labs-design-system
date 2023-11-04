import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const CircleDot24Icon = defineIcon({
    name: 'CircleDot24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                fill=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `,
});