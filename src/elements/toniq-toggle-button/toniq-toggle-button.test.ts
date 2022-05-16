import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {ToniqToggleButton} from './toniq-toggle-button.element';

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
        assert.equal(rendered.shadowRoot?.textContent?.trim(), textToRender);
    });
});
