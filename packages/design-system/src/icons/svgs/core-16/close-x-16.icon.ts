import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const CloseX16Icon = defineIcon({
    name: 'CloseX16Icon',
    svgTemplate: html`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4L4 12"
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4 4L12 12"
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `,
});
