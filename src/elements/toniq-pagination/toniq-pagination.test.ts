import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {ToniqPagination} from './toniq-pagination.element';

describe(ToniqPagination.tagName, () => {
    createElementRegistrationTest(ToniqPagination);

    it(
        'should correctly set current page',
        createFixtureTest(async () => {
            const currentPage = 4;
            const rendered = await fixture(
                html`
                    <${ToniqPagination} ${assign(ToniqPagination.props.currentPage, currentPage)} />
                `,
            );

            const page = queryThroughShadow('button.page.selected', rendered);
            assertInstanceOf(page, HTMLButtonElement);
            assert.strictEqual(parseInt(getTextContentThroughShadow(page)), currentPage);
        }),
    );

    it(
        'should correctly set page count',
        createFixtureTest(async () => {
            const pageCount = 10;
            const rendered = await fixture(
                html`
                    <${ToniqPagination} ${assign(ToniqPagination.props.pageCount, pageCount)} />
                `,
            );

            const page = queryThroughShadow('button.page', rendered, true);
            const lastPage = page[page.length - 1];
            assertInstanceOf(lastPage, HTMLButtonElement);
            assert.strictEqual(parseInt(getTextContentThroughShadow(lastPage)), pageCount);
        }),
    );

    it(
        'should correctly set page size',
        createFixtureTest(async () => {
            const pagesShown = 7;
            const rendered = await fixture(
                html`
                    <${ToniqPagination} ${assign(ToniqPagination.props.pagesShown, pagesShown)} />
                `,
            );

            const page = queryThroughShadow('button.page', rendered, true);
            assert.strictEqual(page.length, pagesShown);
        }),
    );
});
