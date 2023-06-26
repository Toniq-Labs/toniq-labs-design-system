import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {assertIconEquals} from '../../element-testing/icon-test-helpers';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {getByTestId} from '../../element-testing/test-id-testing';
import {ArrowsSort24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
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
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options,
                        })}
                    />
                `,
            );

            const selectedOption = queryThroughShadow('span.select-selected', rendered);
            assertInstanceOf(selectedOption, HTMLElement);
            assert.strictEqual(selectedOption.innerText, options[0].label);
        }),
    );

    it(
        'should render an icon when that input is set',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options,
                            icon: ArrowsSort24Icon,
                        })}
                    />
                `,
            );

            const renderedIcon = getByTestId('rendered-input-icon', rendered);
            assertInstanceOf(renderedIcon, ToniqIcon);
            assertIconEquals(renderedIcon, ArrowsSort24Icon);
        }),
    );

    it(
        'should correctly set selected default option',
        createFixtureTest(async () => {
            const rendered = await fixture(
                html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options,
                            value: options[2],
                        })}
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
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options,
                        })}
                    />
                `,
            );

            const optionList = queryThroughShadow('div.select-options', rendered);
            assert.strictEqual(optionList?.childElementCount, options.length);
        }),
    );

    runFocusTests(
        html`
            <${ToniqDropdown}
                ${assign(ToniqDropdown, {
                    options: [
                        {
                            label: 'test',
                            value: 'test',
                        },
                    ],
                })}
            ></${ToniqDropdown}>
        `,
        true,
    );
});
