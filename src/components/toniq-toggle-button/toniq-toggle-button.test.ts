import {assert, expect, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {ToniqToggleButton} from './toniq-toggle-button.component';

describe(ToniqToggleButton.tagName, () => {
    it('should be registered as a component', () => {
        const newlyCreated = document.createElement(ToniqToggleButton.tagName);
        assert.instanceOf(newlyCreated, ToniqToggleButton);
    });

    it('should render assigned text', async () => {
        const textToRender = 'Buy Now';

        const rendered = await fixture(
            html`
                <${ToniqToggleButton}
                    ${assign(ToniqToggleButton.props.text, textToRender)}
                ></${ToniqToggleButton}>
            `,
        );
        expect(rendered.shadowRoot?.textContent?.trim()).to.equal(textToRender);
    });
});
