import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Info24Icon = defineIcon({
    name: 'Info24Icon',
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
            <path
                fill="none"
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M12 11.5v5"
            />
        </svg>
    `,
});
