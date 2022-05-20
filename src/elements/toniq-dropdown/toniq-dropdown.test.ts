import {assert} from '@open-wc/testing';
import {ToniqDropdown} from './toniq-dropdown.element';

describe(ToniqDropdown.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqDropdown.tagName);
        assert.instanceOf(newlyCreated, ToniqDropdown);
    });
});
