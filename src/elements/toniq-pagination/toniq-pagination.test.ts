import {html} from 'element-vir';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {createFocusTests} from '../../element-testing/test-focus';
import {ToniqPagination} from './toniq-pagination.element';

describe(ToniqPagination.tagName, () => {
    createElementRegistrationTest(ToniqPagination);
    createFocusTests(html`<${ToniqPagination}></${ToniqPagination}>`, true);
});
