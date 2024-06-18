import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertTypeOf} from 'run-time-assertions';
import {ToniqListTable, createListTableTable} from './toniq-list-table.element';

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
});

describe(createListTableTable.name, () => {
    it('should have proper type enforcement', () => {
        createListTableTable({
            entries: [],
            columns: [
                {key: 'first', title: 'First'},
                {key: 'second', title: 'Second'},
            ],
            // missing keys
            // @ts-expect-error
            createRowObject(entry) {
                return {
                    cells: {
                        first: 'yo',
                    },
                };
            },
        });
        createListTableTable({
            entries: [
                {
                    key1: 'string',
                    key2: 42,
                },
            ],
            columns: [
                {key: 'first', title: 'First'},
                {key: 'second', title: 'Second'},
            ],
            createRowObject(entry) {
                assertTypeOf(entry).toEqualTypeOf<Readonly<{key1: string; key2: number}>>();
                return {
                    cells: {
                        first: 'yo',
                        second: 'hi',
                    },
                };
            },
        });
        createListTableTable({
            entries: [
                {
                    key1: 'string',
                    key2: 42,
                },
            ],
            columns: [],
            // can't do anything if columNames is empty
            // @ts-expect-error
            createRowObject(entry) {
                return {cells: {}};
            },
        });
    });
});
