import {assert} from '@open-wc/testing';
import {DeclarativeElementDefinition} from 'element-vir';

export function createElementRegistrationTest(declarativeElement: DeclarativeElementDefinition) {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(declarativeElement.tagName);
        assert.instanceOf(newlyCreated, declarativeElement);
    });
}
