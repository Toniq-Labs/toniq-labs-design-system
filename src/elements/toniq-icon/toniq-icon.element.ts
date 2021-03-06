import {css, html} from 'element-vir';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ToniqSvg} from '../../icons/toniq-svg';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement({
    tagName: 'toniq-icon',
    props: {
        icon: undefined as undefined | ToniqSvg,
    },
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
    renderCallback: ({props}) => {
        return html`
            ${unsafeSVG(props.icon?.svgString)}
        `;
    },
});
