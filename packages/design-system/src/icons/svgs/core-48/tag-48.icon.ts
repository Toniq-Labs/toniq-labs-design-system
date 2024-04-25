import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const Tag48Icon = defineIcon({
    name: 'Tag48Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                d="M6 12v10.344a4 4 0 0 0 1.172 2.828l15.42 15.42a4.82 4.82 0 0 0 6.816 0l11.184-11.184a4.82 4.82 0 0 0 0-6.816l-15.42-15.42A4 4 0 0 0 22.344 6H12a6 6 0 0 0-6 6"
            />
            <circle fill="#000" cx="15" cy="15" r="2" />
        </svg>
    `,
});
