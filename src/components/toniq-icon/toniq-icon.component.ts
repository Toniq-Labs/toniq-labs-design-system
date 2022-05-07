import {css, defineFunctionalElement, html} from 'element-vir';
import {ToniqSvg} from '../../icons/toniq-svg';

export const ToniqIcon = defineFunctionalElement({
    tagName: 'toniq-icon',
    props: {
        icon: undefined as undefined | ToniqSvg,
        title: '',
    },
    styles: css``,
    renderCallback: ({props}) => {
        return html`
            derp
        `;
    },
});
