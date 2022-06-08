import {assert, expect, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
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

    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqDropdown.tagName);
        assert.instanceOf(newlyCreated, ToniqDropdown);
    });

    it('should correctly set default option', async () => {
        const rendered = await fixture(
            html`
                <${ToniqDropdown} ${assign(ToniqDropdown.props.options, options)} />
            `,
        );

        const selectedOption = queryThroughShadow('span.select-selected', rendered);
        expect(selectedOption).to.have.text(options[0].label);
    });

    it('should correctly set selected default option', async () => {
        const rendered = await fixture(
            html`
                <${ToniqDropdown}
                    ${assign(ToniqDropdown.props.options, options)}
                    ${assign(ToniqDropdown.props.selected, options[2])}
                />
            `,
        );

        const selectedOption = queryThroughShadow('span.select-selected', rendered);
        expect(selectedOption).to.have.text(options[2].label);
    });

    it('should display the correct number of options', async () => {
        const rendered = await fixture(
            html`
                <${ToniqDropdown} ${assign(ToniqDropdown.props.options, options)} />
            `,
        );

        const optionList = queryThroughShadow('div.select-options', rendered);
        expect(optionList?.childElementCount).equals(options.length);
    });
});
