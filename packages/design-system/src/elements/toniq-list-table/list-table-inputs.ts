import {ArrayElement, PartialAndUndefined, areJsonEqual} from '@augment-vir/common';
import {HtmlInterpolation} from 'element-vir';

export type Columns = {
    key: PropertyKey;
    title: string;
    disabled?: boolean;
    mobile?: {
        sticky: boolean | undefined;
    };
};

export type ColumnsBase = ReadonlyArray<Readonly<Columns>>;

export type HeaderItem = {
    title: string;
    key: string;
    left: number;
    mobile?: {
        sticky: boolean;
    };
};

export type ListTableRow<Columns extends ColumnsBase> = {
    cells: Readonly<
        ArrayElement<Columns> extends never
            ? never
            : Record<ArrayElement<Columns>['key'], HtmlInterpolation>
    >;
    rowActions?:
        | PartialAndUndefined<{
              click: (params: {
                  clickEvent: MouseEvent;
                  dispatch: (newEvent: Event) => void;
              }) => void;
          }>
        | undefined;
};

export enum ListTableHeaderStyleEnum {
    Default = 'default',
    Transparent = 'transparent',
}

export type ListTableInputs = {
    columns: Readonly<ColumnsBase>;
    rows: ReadonlyArray<Readonly<ListTableRow<any>>>;
    /** Defaults to ListTableHeaderStyleEnum.Default. */
    headerStyle?: ListTableHeaderStyleEnum | undefined;
    pagination?:
        | Readonly<{
              currentPage: number;
              pageCount: number;
          }>
        | undefined;
    showLoading?: boolean | undefined;
};

export type CreateRowObjectCallback<EntryType, Columns extends ColumnsBase> = (
    entry: Readonly<EntryType>,
    index: number,
) => Readonly<ListTableRow<Columns>>;

export function createListTableTable<EntryType, const Columns extends ColumnsBase>({
    entries,
    columns,
    createRowObject,
}: {
    entries: ReadonlyArray<Readonly<EntryType>>;
    columns: Readonly<Columns>;
    createRowObject: CreateRowObjectCallback<EntryType, Columns>;
}): Pick<ListTableInputs, 'rows' | 'columns'> {
    const columnsObject = Object.fromEntries(
        columns.map((column) => [
            column.key,
            '',
        ]),
    );

    const rows = entries.map((entry, index) => {
        const row = createRowObject(entry, index);

        if (!areJsonEqual(Object.keys(columnsObject).sort(), Object.keys(row.cells).sort())) {
            console.error('broken list table row', {cells: row.cells, columns: columnsObject});
            throw new Error('List table row keys does not match expect column keys.');
        }

        return row;
    });

    return {rows, columns};
}
