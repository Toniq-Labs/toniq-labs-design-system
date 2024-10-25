import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const Inbound24Icon = defineIcon({
    name: 'Inbound24',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="2"
        >
            <path transform="rotate(90 12 12)" d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6 3 6-6" />
            <path transform="rotate(90 12 12)" d="M11 9h4v4" />
        </svg>
    `,
});
