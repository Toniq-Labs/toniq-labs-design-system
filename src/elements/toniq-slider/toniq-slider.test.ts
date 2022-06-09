import {assert} from '@open-wc/testing';
import {ToniqSlider} from './toniq-slider.element';

describe(ToniqSlider.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqSlider.tagName);
        assert.instanceOf(newlyCreated, ToniqSlider);
    });
});
