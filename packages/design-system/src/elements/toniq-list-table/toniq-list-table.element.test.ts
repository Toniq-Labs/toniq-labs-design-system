import {itCases} from '@augment-vir/browser-testing';
import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ToniqPagination} from '../toniq-pagination/toniq-pagination.element';
import {createListTableTable} from './list-table-inputs';
import {ToniqListTable} from './toniq-list-table.element';

const exampleListTableInputs = createListTableTable({
    entries: [
        {
            first: 'yo',
            second: 'hey',
        },
        {
            first: 'yo',
            second: 'hey',
        },
    ],
    columns: [
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
    ],
    createRowObject(entry) {
        return {
            cells: {
                first: entry.first,
                second: entry.second,
            },
        };
    },
});

describe(ToniqListTable.tagName, () => {
    it('renders the list table', async () => {
        const renderedToniqListTable = await renderFixture(html`
            <${ToniqListTable.assign({
                ...exampleListTableInputs,
            })}></${ToniqListTable}>
        `);
    });

    async function testRender(testCase: {inputs: typeof ToniqListTable.inputsType}) {
        const renderedToniqListTable = await renderFixture(html`
            <${ToniqListTable.assign(testCase.inputs)}></${ToniqListTable}>
        `);
        assertInstanceOf(renderedToniqListTable, ToniqListTable);
        const renderedRows = renderedToniqListTable.shadowRoot.querySelectorAll('.row-wrapper');

        if (testCase.inputs.pagination) {
            assertInstanceOf(renderedToniqListTable, ToniqListTable);
            const renderedToniqPagination = renderedToniqListTable.shadowRoot.querySelector(
                ToniqPagination.tagName,
            );
            assertInstanceOf(renderedToniqPagination, ToniqPagination);
        }

        return {
            // Minus the header row
            row: renderedRows.length - 1,
        };
    }

    itCases(testRender, [
        {
            it: 'renders correct number of row items',
            input: {
                inputs: {
                    ...exampleListTableInputs,
                },
            },
            expect: {
                row: 2,
            },
        },
        {
            it: 'renders pagination',
            input: {
                inputs: {
                    ...exampleListTableInputs,
                    pagination: {
                        currentPage: 3,
                        pageCount: 10,
                    },
                },
            },
            expect: {
                row: 2,
            },
        },
    ]);
});
