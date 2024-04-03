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
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_3290_17463)">
                <path
                    d="M15.5 5.5L12.5 4L13 7.5L11 9.5L14 10L15.5 13L17 10L20 9.5L18 7.5L18.5 4L15.5 5.5Z"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 20L11 13"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9 20L12.5 16.5"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 15L7.5 11.5"
                    stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
                    stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_3290_17463">
                    <rect
                        width="24"
                        height="24"
                        fill="${toniqIconCssVars['toniq-icon-fill-color'].value}"
                        transform="matrix(1 0 0 -1 0 24)"
                    />
                </clipPath>
            </defs>
        </svg>
    `,
});
