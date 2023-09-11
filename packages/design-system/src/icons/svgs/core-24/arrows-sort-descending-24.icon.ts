import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconColors} from '../../../styles';

export const ArrowsSortDescending24Icon = defineIcon({
    name: 'ArrowsSortDescending24Icon',
    svgTemplate: html`
        <svg
            fill="none"
            stroke="${toniqIconColors.stroke()}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m5 5 14 14m0-6v6h-6" />
        </svg>
    `,
});
