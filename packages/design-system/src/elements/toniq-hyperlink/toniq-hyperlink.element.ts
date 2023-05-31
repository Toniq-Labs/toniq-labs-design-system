import {css, html} from 'element-vir';
import {toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqHyperlink = defineToniqElement<{
    newTab: boolean;
    url: string;
}>()({
    tagName: 'toniq-hyperlink',
    hostClasses: {
        'toniq-hyperlink-with-hover-styles': false,
    },
    styles: ({hostClasses}) => css`
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

        ${hostClasses['toniq-hyperlink-with-hover-styles'].selector}:hover a, ${hostClasses[
            'toniq-hyperlink-with-hover-styles'
        ].selector} a:hover {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        ${hostClasses['toniq-hyperlink-with-hover-styles'].selector}:active a, ${hostClasses[
            'toniq-hyperlink-with-hover-styles'
        ].selector} a:active {
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
