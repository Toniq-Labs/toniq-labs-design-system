import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {ToniqCheckbox} from './toniq-checkbox.element';

describe(ToniqCheckbox.tagName, () => {
    it('should be registered as a component', () => {
        const newlyCreated = document.createElement(ToniqCheckbox.tagName);
        assert.instanceOf(newlyCreated, ToniqCheckbox);
    });

    it('should render assigned text', async () => {
        const textToRender = 'Orange';

        const rendered = await fixture(
            html`
                <${ToniqCheckbox}
                    ${assign(ToniqCheckbox.props.text, textToRender)}
                ></${ToniqCheckbox}>
            `,
        );
        assert.equal(rendered.shadowRoot?.textContent?.trim(), textToRender);
    });
});
