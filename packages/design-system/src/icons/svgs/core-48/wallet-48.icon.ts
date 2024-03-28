import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const Wallet48Icon = defineIcon({
    name: 'Wallet48Icon',
    svgTemplate: html`
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g
                clip-path="url(#a)"
                stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
                stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="M34 16v-6c0-.53043-.2107-1.03914-.5858-1.41421C33.0391 8.21071 32.5304 8 32 8H12c-1.0609 0-2.07828.42143-2.82843 1.17157C8.42143 9.92172 8 10.9391 8 12m0 0c0 1.0609.42143 2.0783 1.17157 2.8284C9.92172 15.5786 10.9391 16 12 16h24c.5304 0 1.0391.2107 1.4142.5858S38 17.4696 38 18v6M8 12v24c0 1.0609.42143 2.0783 1.17157 2.8284C9.92172 39.5786 10.9391 40 12 40h24c.5304 0 1.0391-.2107 1.4142-.5858S38 38.5304 38 38v-6"
                />
                <path
                    d="M40 24v8h-8c-1.0609 0-2.0783-.4214-2.8284-1.1716C28.4214 30.0783 28 29.0609 28 28c0-1.0609.4214-2.0783 1.1716-2.8284C29.9217 24.4214 30.9391 24 32 24h8Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
                        d="M0 0h48v48H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    `,
});
