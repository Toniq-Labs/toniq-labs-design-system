import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const SquareCheck24Icon = defineIcon({
    name: 'SquareCheck24Icon',
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
            <rect
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `,
});
