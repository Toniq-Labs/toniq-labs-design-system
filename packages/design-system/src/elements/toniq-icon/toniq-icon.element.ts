import {css, html, unsafeSVG} from 'element-vir';
import {ToniqSvg} from '../../icons/toniq-svg';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement<{icon?: ToniqSvg | undefined}>()({
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
            ${inputs.icon ? unsafeSVG(inputs.icon.svgString) : ''}
        `;
    },
});
