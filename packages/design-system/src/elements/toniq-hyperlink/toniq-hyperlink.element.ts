import {css, html} from 'element-vir';
import {toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqHyperlink = defineToniqElement<{
    newTab: boolean;
    url: string;
}>()({
    tagName: 'toniq-hyperlink',
    hostClasses: {
        'with-hover-styles': false,
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${hostClassSelectors['with-hover-styles']}:hover a, ${hostClassSelectors[
            'with-hover-styles'
        ]} a:hover {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        ${hostClassSelectors['with-hover-styles']}:active a, ${hostClassSelectors[
            'with-hover-styles'
        ]} a:active {
            color: ${toniqColors.pageInteractionActive.foregroundColor};
        }
    `,
    renderCallback({inputs}) {
        if (inputs.newTab) {
            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a href=${inputs.url} target="_blank" rel="noopener noreferrer"><slot></slot></a>
            `;
        } else {
            return html`
                <a href=${inputs.url}><slot></slot></a>
            `;
        }
    },
});
