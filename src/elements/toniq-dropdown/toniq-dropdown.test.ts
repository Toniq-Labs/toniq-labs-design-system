import {assert, expect, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {ToniqDropdown} from './toniq-dropdown.element';

describe(ToniqDropdown.tagName, () => {
    const list = [
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
                <${ToniqDropdown} ${assign(ToniqDropdown.props.list, list)} />
            `,
        );

        const selectedOption = queryThroughShadow('span.select-selected', rendered);
        expect(selectedOption).to.have.text(list[0]!.label);
    });

    it('should correctly set selected default option', async () => {
        const rendered = await fixture(
            html`
                <${ToniqDropdown}
                    ${assign(ToniqDropdown.props.list, list)}
                    ${assign(ToniqDropdown.props.select, list[2])}
                />
            `,
        );

        const selectedOption = queryThroughShadow('span.select-selected', rendered);
        expect(selectedOption).to.have.text(list[2].label);
    });

    it('should display the correct number of options', async () => {
        const rendered = await fixture(
            html`
                <${ToniqDropdown} ${assign(ToniqDropdown.props.list, list)} />
            `,
        );

        const options = queryThroughShadow('div.select-options', rendered);
        expect(options?.childElementCount).equals(list.length);
    });
});
