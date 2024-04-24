import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const ShootingStar24Icon = defineIcon({
    name: 'ShootingStar24Icon',
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
            <path
                d="m15.5 5.5-3-1.5.5 3.5-2 2 3 .5 1.5 3 1.5-3 3-.5-2-2 .5-3.5zM4 20l7-7m-2 7 3.5-3.5M4 15l3.5-3.5"
            />
        </svg>
    `,
});
