import {assertTypeOf} from 'run-time-assertions';
import {createListTableTable} from './list-table-inputs';

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
