import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const ChevronsRight16Icon = defineIcon({
    name: 'ChevronsRight16Icon',
    svgTemplate: html`
        <svg
            width="16"
            height="16"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                clip-path="url(#a)"
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="m4.66699 4.6665 3.33334 3.33334-3.33334 3.33336m4-6.6667 3.33331 3.33334-3.33331 3.33336"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
                        d="M0 0h16v16H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    `,
});
