import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVarWithFallback, toniqIconCssVars} from '../../../styles/icon-css-vars';

export const BioniqRobot100Icon = defineIcon({
    name: 'BioniqRobot100Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVarWithFallback['toniq-icon-stroke-color']('#8A2BE2')}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="100"
            height="100"
            viewBox="0 0 100 100"
        >
            <path
                fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
                stroke-width="calc(${toniqIconCssVars['toniq-icon-stroke-width'].value} * 2)"
                d="m50 89-38.5-3L26 22h48l14.5 64L50 89M23 35.6l-8.5-2.1-6 23 9.2 2.3m59.6-23.2 8.4-2.1 6 23-9.2 2.3"
            />
            <path
                stroke-width="calc(${toniqIconCssVars['toniq-icon-stroke-width'].value} * 2)"
                d="M39 9.5 42.1 22M61 9.5 57.9 22M28.5 55h43L76 79H24l4.5-24ZM67 55v24m-8-24v24m-9-24v24M33 55v24m8-24v24m4.5-43.5-1-1.5h-13l-1 1.5 7 10h2l6-10Zm9 0 1-1.5h13l1 1.5-7 10h-2l-6-10Z"
            />
        </svg>
    `,
});
