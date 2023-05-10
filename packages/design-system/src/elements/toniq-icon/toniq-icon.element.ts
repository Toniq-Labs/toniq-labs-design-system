import {css, html, unsafeSVG} from 'element-vir';
import {ToniqSvg} from '../../icons/toniq-svg';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement<{icon?: ToniqSvg | undefined}>()({
    tagName: 'toniq-icon',
    hostClasses: {
        'icon-fit': false,
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            display: block;
        }
        svg {
            /*
                svg elements are set to inline by default which gives it space under the image. So 
                we're changing it to block here.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClassSelectors['icon-fit']} svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs}) => {
        return html`
            ${inputs.icon ? unsafeSVG(inputs.icon.svgString) : ''}
        `;
    },
});
