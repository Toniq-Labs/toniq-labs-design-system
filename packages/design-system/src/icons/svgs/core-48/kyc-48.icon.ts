import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVarWithFallback, toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Kyc48Icon = defineIcon({
    name: 'Kyc48Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                fill=${toniqIconCssVarWithFallback['toniq-icon-fill-color']('#00d093')}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                fill=${toniqIconCssVarWithFallback['toniq-icon-fill-color']('#00d093')}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value} d="M28 32h10" />
            <path stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value} d="M28 28h5" />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                fill=${toniqIconCssVarWithFallback['toniq-icon-fill-color']('#00d093')}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `,
});
