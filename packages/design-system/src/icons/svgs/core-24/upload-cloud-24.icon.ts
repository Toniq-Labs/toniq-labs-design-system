import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const UploadCloud24Icon = defineIcon({
    name: 'UploadCloud24',
    svgTemplate: html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="M7 18a4.82 4.82 0 0 1-3.327-1.318A4.4 4.4 0 0 1 2.295 13.5c0-1.193.496-2.338 1.378-3.182A4.82 4.82 0 0 1 6.999 9c.295-1.313 1.157-2.466 2.397-3.207a6 6 0 0 1 2.025-.749 6.2 6.2 0 0 1 2.19.006c.722.132 1.408.39 2.02.76.611.37 1.136.845 1.543 1.397.408.553.69 1.172.832 1.823.142.65.14 1.32-.006 1.97h1a3.5 3.5 0 1 1 0 7h-1"
                />
                <path d="m9 15 3-3 3 3m-3-3v9" />
            </g>
        </svg>
    `,
});
