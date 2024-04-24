import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const Wallet48Icon = defineIcon({
    name: 'Wallet48Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M8 16v-4c0-4 4-4 4-4h20c1.2 0 2 .8 2 2v6"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M38 24v-6c0-1.2-.8-2-2-2H12s-4 0-4-4v24c0 2 2 4 4 4h24c1.2 0 2-.8 2-2v-4"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M40 24v8h-8a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z"
            />
        </svg>
    `,
});
