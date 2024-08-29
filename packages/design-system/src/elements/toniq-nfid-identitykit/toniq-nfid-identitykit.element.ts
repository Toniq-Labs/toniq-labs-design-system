import {IdentityKit, IdentityKitSignerAgent} from '@nfid/identitykit';
import {css, defineElement, html} from 'element-vir';

export const ToniqNfidIdentityKit = defineElement<{
    test: string;
}>()({
    tagName: 'toniq-nfid-identity-kit',
    styles: css`
        :host {
            display: flex;
        }
    `,
    renderCallback({host}) {
        console.log(IdentityKit, IdentityKitSignerAgent);
        return html`
            Connect Wallet
        `;
    },
});
