import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const ArrowBarUp24Icon = defineIcon({
    name: 'ArrowBarUp24Icon',
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
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value} d="M4 20h16" />
        </svg>
    `,
});
