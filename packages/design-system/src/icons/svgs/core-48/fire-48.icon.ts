import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Fire48Icon = defineIcon({
    name: 'Fire48Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M24 24c4-5.92 0-14-2-16 0 6.076-3.546 9.482-6 12-2.452 2.52-4 6.48-4 10a12 12 0 0 0 24 0c0-3.064-2.112-7.88-4-10-3.572 6-5.582 6-8 4"
            />
        </svg>
    `,
});
