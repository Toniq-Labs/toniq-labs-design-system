import {css, defineFunctionalElement, html} from 'element-vir';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {ToniqSvg} from '../../icons/toniq-svg';

export const ToniqIcon = defineFunctionalElement({
    tagName: 'toniq-icon',
    props: {
        icon: undefined as undefined | ToniqSvg,
        title: '',
    },
    styles: css`
        svg {
            /* img including svg by default in browsers is set to inline which gives it space under the image See: https://stackoverflow.com/a/34952703 */
            display: block;
        }
    `,
    renderCallback: ({props}) => {
        return html`
            <div title=${props.title}>${unsafeSVG(props.icon?.svgString)}</div>
        `;
    },
});
