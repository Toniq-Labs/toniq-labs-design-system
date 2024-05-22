import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const Gift24Icon = defineIcon({
    name: 'Gift24Icon',
    svgTemplate: html`
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                d="M3.5 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm9-1v13"
            />
            <path
                d="M19.5 12v7a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-7M8 8a2.5 2.5 0 1 1 0-5c.965-.017 1.91.451 2.713 1.343.802.892 1.425 2.166 1.787 3.657.362-1.49.985-2.765 1.787-3.657C15.09 3.451 16.035 2.983 17 3a2.5 2.5 0 0 1 0 5"
            />
        </svg>
    `,
});
