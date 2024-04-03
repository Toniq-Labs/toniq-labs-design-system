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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3290_17456)">
                <path
                    d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 4V17"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15 7V20"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_3290_17456">
                    <rect
                        width="24"
                        height="24"
                        fill="${toniqIconCssVars['toniq-icon-fill-color'].value}"
                    />
                </clipPath>
            </defs>
        </svg>
    `,
});
