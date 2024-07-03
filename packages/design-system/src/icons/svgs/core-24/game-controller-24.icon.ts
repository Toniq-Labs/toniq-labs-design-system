import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles/icon-css-vars';

export const GameController24Icon = defineIcon({
    name: 'GameController24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 7.5v4.75a.7.7 0 0 1-.055.325.7.7 0 0 1-.348.366l-5.462 2.58a5 5 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.4-.691V12.5"
            />
            <path
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                d="m4.431 12.216 5.634-2.332a5.07 5.07 0 0 1 3.87 0l5.634 2.332a.692.692 0 0 1 .028 1.27l-5.462 2.542a5.07 5.07 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.269M12 7v6"
            />
        </svg>
    `,
});
