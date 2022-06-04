import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {fixtureTest} from '../../element-testing/fixture-test';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-through-shadow';
import {ToniqButton} from './toniq-button.element';

describe(ToniqButton.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqButton.tagName);
        assert.instanceOf(newlyCreated, ToniqButton);
    });

    it(
        'renders with default values',
        fixtureTest(async () => {
            const rendered = await fixture(
                html`
                <${ToniqButton}></${ToniqButton}>
            `,
            );

            const innerButton = queryThroughShadow('button', rendered);
            assertInstanceOf(innerButton, HTMLButtonElement);

            assert.equal(innerButton.className.trim(), 'variant-primary');
        }),
    );

    it(
        'should render assigned text',
        fixtureTest(async () => {
            const textToRender = 'Buy Now';

            const rendered = await fixture(
                html`
                <${ToniqButton}
                    ${assign(ToniqButton.props.text, textToRender)}
                ></${ToniqButton}>
            `,
            );
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );
});
