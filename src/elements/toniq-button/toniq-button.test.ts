import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertDefinedAndNotNull, assertInstanceOf} from '../../element-testing/assertion-helpers';
import {queryWithShadow} from '../../element-testing/query-with-shadow';
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

        const innerButton = queryWithShadow('button', rendered);
        assertInstanceOf(innerButton, HTMLButtonElement);

        assert.equal(innerButton.className.trim(), 'variant-primary');
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
        assertDefinedAndNotNull(rendered.shadowRoot?.textContent);
        assert.equal(rendered.shadowRoot.textContent.trim(), textToRender);
    });
});
