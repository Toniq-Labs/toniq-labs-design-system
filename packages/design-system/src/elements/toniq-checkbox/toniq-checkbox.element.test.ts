import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {getTextContentThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {ToniqCheckbox} from './toniq-checkbox.element';

describe(ToniqCheckbox.tagName, () => {
    createElementRegistrationTest(ToniqCheckbox);

    it(
        'should render assigned text',
        createFixtureTest(async () => {
            const textToRender = 'Orange';

            const rendered = await fixture(
                html`
                    <${ToniqCheckbox.assign({
                        text: textToRender,
                        checked: false,
                    })}></${ToniqCheckbox}>
                `,
            );
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );

    runFocusTests(
        html`
            <${ToniqCheckbox}></${ToniqCheckbox}>
        `,
        true,
    );
});
