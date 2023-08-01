import {css, html} from 'element-vir';
import {toniqFontStyles} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

/** Displays the given text but allows enough room for the text to become bold. */
export const ToniqBoldSpace = defineToniqElement<{text: string}>()({
    tagName: 'toniq-bold-space',

    styles: css`
        :host {
            display: inline-block;
            position: relative;
            vertical-align: top;
        }

        .text {
            display: inline-block;
            max-width: 100%;
            white-space: inherit;
            text-overflow: inherit;
            overflow: inherit;
        }

        .text.bold {
            /* so that the element still takes up space but it's not visible */
            visibility: hidden;
            ${toniqFontStyles.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <span hidden aria-hidden="true" class="text bold">${inputs.text}</span>
            <span class="text visible">${inputs.text}</span>
        `;
    },
});
