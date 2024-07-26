import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Target24Icon = defineIcon({
    name: 'Target24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m8-10v2m0 16v2m8-10h2M2 12h2"
            />
        </svg>
    `,
});
