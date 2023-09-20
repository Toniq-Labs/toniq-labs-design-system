import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVarWithFallback} from '../../../styles/icon-css-vars';

export const BrandTwitch24Icon = defineIcon({
    name: 'BrandTwitch24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${toniqIconCssVarWithFallback['toniq-icon-fill-color']('#9146FF')}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `,
});
