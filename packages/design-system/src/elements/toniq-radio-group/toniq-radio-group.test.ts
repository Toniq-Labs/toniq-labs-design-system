import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {getTextContentThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {ToniqRadioGroup} from './toniq-radio-group.element';

describe(ToniqRadioGroup.tagName, () => {
    createElementRegistrationTest(ToniqRadioGroup);

    it(
        'should render assigned text',
        createFixtureTest(async () => {
            const textToRender = 'Orange';

            const rendered = await fixture(
                html`
                    <${ToniqRadioGroup.assign({
                        entries: [
                            {
                                label: textToRender,
                                value: 'first',
                            },
                        ],
                        value: 'first',
                    })}></${ToniqRadioGroup}>
                `,
            );
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );

    runFocusTests(
        html`
            <${ToniqRadioGroup.assign({
                entries: [
                    {
                        value: 'test value 1',
                    },
                ],
                value: 'anything',
            })}></${ToniqRadioGroup}>
        `,
        true,
    );
});
