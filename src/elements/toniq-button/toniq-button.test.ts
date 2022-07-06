import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {getTextContentThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {createFocusTests} from '../../element-testing/test-focus';
import {ToniqButton} from './toniq-button.element';

describe(ToniqButton.tagName, () => {
    createElementRegistrationTest(ToniqButton);

    it(
        'renders with default values',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                <${ToniqButton}></${ToniqButton}>
            `,
            );

            assertInstanceOf(rendered, HTMLElement);

            assert.equal(rendered.className.trim(), 'variant-primary');
        }),
    );

    it(
        'should render assigned text',
        createFixtureTest(async () => {
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

    createFocusTests(html`<${ToniqButton}></${ToniqButton}>`, true);
});
