import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const ChevronsRight16Icon = defineIcon({
    name: 'ChevronsRight16Icon',
    svgTemplate: html`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.666 4.667 7.999 8l-3.333 3.333m4-6.666L11.999 8l-3.333 3.333" />
        </svg>
    `,
});
