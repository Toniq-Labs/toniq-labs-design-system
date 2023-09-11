import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconColors} from '../../../styles/icon-colors';

export const CircleDot24Icon = defineIcon({
    name: 'CircleDot24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="${toniqIconColors.stroke()}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${toniqIconColors.fill()}"
                stroke="${toniqIconColors.fill()}"
                stroke-width="2"
            />
        </svg>
    `,
});
