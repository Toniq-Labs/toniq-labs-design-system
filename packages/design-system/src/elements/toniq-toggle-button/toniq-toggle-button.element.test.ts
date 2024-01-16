import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {getTextContentThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {ToniqToggleButton} from './toniq-toggle-button.element';

describe(ToniqToggleButton.tagName, () => {
    createElementRegistrationTest(ToniqToggleButton);

    it(
        'should render assigned text',
        createFixtureTest(async () => {
            const textToRender = 'Buy Now';

            const rendered = await fixture(html`
                <${ToniqToggleButton.assign({
                    text: textToRender,
                    toggled: false,
                })}></${ToniqToggleButton}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );

    runFocusTests(
        html`
            <${ToniqToggleButton.assign({
                text: 'text',
                toggled: false,
            })}></${ToniqToggleButton}>
        `,
        true,
    );
});
