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
        svg {
            /* svg is set to inline by default which gives it space under the image. See: https://stackoverflow.com/a/34952703 */
            display: block;
        }
    `,
    renderCallback: ({props}) => {
        return html`
            ${unsafeSVG(props.icon?.svgString)}
        `;
    },
});
