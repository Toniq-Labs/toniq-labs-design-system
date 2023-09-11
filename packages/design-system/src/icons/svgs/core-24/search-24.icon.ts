import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconColors} from '../../../styles/icon-colors';

export const Search24Icon = defineIcon({
    name: 'Search24Icon',
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
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6" />
        </svg>
    `,
});
