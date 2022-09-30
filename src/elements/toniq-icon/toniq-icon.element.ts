import {css, html} from 'element-vir';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ToniqSvg} from '../../icons/toniq-svg';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement<{icon: ToniqSvg}>()({
    tagName: 'toniq-icon',
    styles: css`
        :host {
            display: block;
        }
        svg {
            /* svg is set to inline by default which gives it space under the image. See: https://stackoverflow.com/a/34952703 */
            display: block;
        }

        :host(.toniq-icon-fit-icon) svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs}) => {
        return html`
            ${unsafeSVG(inputs.icon.svgString)}
        `;
    },
});
