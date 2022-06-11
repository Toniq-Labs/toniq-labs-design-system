import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {createFocusTests} from '../../element-testing/test-focus';
import {ToniqDropdown} from './toniq-dropdown.element';

describe(ToniqDropdown.tagName, () => {
    const options = [
        {
            value: 1,
            label: 'Option 1',
        },
        {
            value: 2,
            label: 'Option 2',
        },
        {
            value: '3',
            label: 'Option 3',
        },
    ] as const;

    createElementRegistrationTest(ToniqDropdown);

    it(
        'should correctly set default option',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqDropdown} ${assign(ToniqDropdown.props.options, options)} />
                `,
            );

            const selectedOption = queryThroughShadow('span.select-selected', rendered);
            assertInstanceOf(selectedOption, HTMLElement);
            assert.strictEqual(selectedOption.innerText, options[0].label);
        }),
    );

    it(
        'should correctly set selected default option',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown.props.options, options)}
                        ${assign(ToniqDropdown.props.selected, options[2])}
                    />
                `,
            );

            const selectedOption = queryThroughShadow('span.select-selected', rendered);
            assertInstanceOf(selectedOption, HTMLElement);
            assert.strictEqual(selectedOption.innerText, options[2].label);
        }),
    );

    it(
        'should display the correct number of options',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqDropdown} ${assign(ToniqDropdown.props.options, options)} />
                `,
            );

            const optionList = queryThroughShadow('div.select-options', rendered);
            assert.strictEqual(optionList?.childElementCount, options.length);
        }),
    );

    createFocusTests(
        html`<${ToniqDropdown}
            ${assign(ToniqDropdown.props.options, [
                {
                    label: 'test',
                    value: 'test',
                },
            ])}
        ></${ToniqDropdown}>`,
        true,
    );
});
