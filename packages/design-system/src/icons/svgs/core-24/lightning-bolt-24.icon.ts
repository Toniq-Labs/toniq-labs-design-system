import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const LightningBolt24Icon = defineIcon({
    name: 'LightningBolt24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </svg>
    `,
});
