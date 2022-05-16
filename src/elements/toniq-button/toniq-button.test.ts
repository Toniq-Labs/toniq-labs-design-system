import {assert, expect, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {ToniqButton} from './toniq-button.element';

describe(ToniqButton.tagName, () => {
    it('should be registered as a component', () => {
        const newlyCreated = document.createElement(ToniqButton.tagName);
        assert.instanceOf(newlyCreated, ToniqButton);
    });

    it('renders with default values', async () => {
        const rendered = await fixture(
            html`
                <${ToniqButton}></${ToniqButton}>
            `,
        );
        expect(rendered.shadowRoot?.querySelector('button')?.className.trim()).to.equal(
            'variant-primary',
        );
    });

    it('should render assigned text', async () => {
        const textToRender = 'Buy Now';

        const rendered = await fixture(
            html`
                <${ToniqButton}
                    ${assign(ToniqButton.props.text, textToRender)}
                ></${ToniqButton}>
            `,
        );
        expect(rendered.shadowRoot?.textContent?.trim()).to.equal(textToRender);
    });
});
