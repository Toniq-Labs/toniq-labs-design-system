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
            display: block;
        }
    `,
    renderCallback: ({props}) => {
        return html`
            <div title=${props.title}>${unsafeSVG(props.icon?.svgString)}</div>
        `;
    },
});
