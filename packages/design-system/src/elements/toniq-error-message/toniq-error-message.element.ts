import {css, html} from 'element-vir';
import {defineToniqElementNoInputs} from '../define-toniq-element';
import {ToniqAlert, ToniqAlertVariantEnum} from '../toniq-alert/toniq-alert.element';

export const ToniqErrorMessage = defineToniqElementNoInputs({
    tagName: 'toniq-error-message',
    styles: css`
        :host {
            display: block;
        }
    `,
    renderCallback() {
        return html`
            <${ToniqAlert.assign({variant: ToniqAlertVariantEnum.Danger})}>
                <slot></slot>
            </${ToniqAlert}>
        `;
    },
});
