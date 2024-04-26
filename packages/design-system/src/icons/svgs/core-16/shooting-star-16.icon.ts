import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const ShootingStar16Icon = defineIcon({
    name: 'ShootingStar16Icon',
    svgTemplate: html`
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${`calc(${toniqIconCssVars['toniq-icon-stroke-width'].value} / 2)`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m10.333 3.667-2-1L8.666 5 7.333 6.333l2 .333 1 2 1-2 2-.333L12 5l.333-2.333zm-7.666 9.667 4.667-4.667M6 13.334 8.333 11m-5.666-1L5 7.667"
            />
        </svg>
    `,
});
