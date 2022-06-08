import {assert} from '@open-wc/testing';
import {FunctionalElementInstance} from 'element-vir';

export function createElementRegistrationTest(functionalElement: FunctionalElementInstance<any>) {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(functionalElement.tagName);
        assert.instanceOf(newlyCreated, functionalElement);
    });
}
