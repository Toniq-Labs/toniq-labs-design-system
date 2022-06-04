import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {fixtureTest} from '../../element-testing/fixture-test';
import {getTextContentThroughShadow} from '../../element-testing/query-through-shadow';
import {ToniqCheckbox} from './toniq-checkbox.element';

describe(ToniqCheckbox.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqCheckbox.tagName);
        assert.instanceOf(newlyCreated, ToniqCheckbox);
    });

    it(
        'should render assigned text',
        fixtureTest(async () => {
            const textToRender = 'Orange';

            const rendered = await fixture(
                html`
                <${ToniqCheckbox}
                    ${assign(ToniqCheckbox.props.text, textToRender)}
                ></${ToniqCheckbox}>
            `,
            );
            assert.equal(getTextContentThroughShadow(rendered), textToRender);
        }),
    );
});
