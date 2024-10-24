import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Pamphlet24Icon = defineIcon({
    name: 'Pamphlet24Icon',
    svgTemplate: html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zm6-3v13m6-10v13" />
        </svg>
    `,
});
