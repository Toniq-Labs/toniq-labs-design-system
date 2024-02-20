import {css, html} from 'element-vir';
import {defineToniqElementNoInputs} from '../define-toniq-element';

export const ToniqErrorMessage = defineToniqElementNoInputs({
    tagName: 'toniq-error-message',
    styles: css`
        :host {
            display: block;
            color: red;
        }

        p {
            padding: 0;
            margin: 0;
        }
    `,
    renderCallback() {
        return html`
            <p><slot></slot></p>
        `;
    },
});
