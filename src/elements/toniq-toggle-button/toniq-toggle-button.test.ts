import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {getTextContentThroughShadow} from '../../element-testing/query-with-shadow';
import {ToniqToggleButton} from './toniq-toggle-button.element';

describe(ToniqToggleButton.tagName, () => {
    it('should be registered as a custom element', () => {
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
        assert.equal(getTextContentThroughShadow(rendered), textToRender);
    });
});
