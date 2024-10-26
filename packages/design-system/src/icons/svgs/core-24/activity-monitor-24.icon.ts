import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const ActivityMonitor24Icon = defineIcon({
    name: 'ActivityMonitor24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="${toniqIconCssVars['toniq-icon-fill-color'].value}"
            stroke="${toniqIconCssVars['toniq-icon-stroke-color'].value}"
            stroke-width="${toniqIconCssVars['toniq-icon-stroke-width'].value}"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
        </svg>
    `,
});
