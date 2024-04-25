import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const Tag24Icon = defineIcon({
    name: 'Tag24Icon',
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
                d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3"
            />
            <path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        </svg>
    `,
});
