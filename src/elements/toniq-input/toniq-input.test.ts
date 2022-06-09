import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {ToniqInput} from './toniq-input.element';

describe(ToniqInput.tagName, () => {
    createElementRegistrationTest(ToniqInput);
});
