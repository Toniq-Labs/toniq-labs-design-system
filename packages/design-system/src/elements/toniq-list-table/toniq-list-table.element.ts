import {
    ArrayElement,
    DebounceStyle,
    PartialAndUndefined,
    areJsonEqual,
    createDebounce,
    isTruthy,
} from '@augment-vir/common';
import {
    CSSResult,
    HTMLTemplateResult,
    HtmlInterpolation,
    classMap,
    css,
    defineElementEvent,
    guard,
    html,
    ifDefined,
    listen,
    nothing,
    onDomCreated,
    perInstance,
    renderIf,
    repeat,
} from 'element-vir';
import {ChevronsRight16Icon} from '../../icons/svgs/core-16/chevrons-right-16.icon';
import {toniqColors, toniqDurations, toniqFontStyles} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqLoading, ToniqLoadingSizeEnum} from '../toniq-loading/toniq-loading.element';
import {ToniqPagination} from '../toniq-pagination/toniq-pagination.element';

export type ListTableColumn = Readonly<{
    key: PropertyKey;
    title: string;
    disabled?: boolean;
    option?: {
        sticky?: boolean | undefined;
        spaceEvenly?: boolean | undefined;
    };
    style?: CSSResult;
}>;

export type ColumnsBase = ReadonlyArray<ListTableColumn>;

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
    paginationAction?: HTMLTemplateResult | undefined;
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

const scrollbarColorCssVar = toniqColors.pageInteraction.foregroundColor;
const scrollbarTrackColorCssVar = toniqColors.accentSecondary.backgroundColor;

export const ToniqListTable = defineToniqElement<ListTableInputs>()({
    tagName: 'toniq-list-table',
    cssVars: {
        'toniq-list-table-border-width': '1px',
        'toniq-list-table-border-hover-width': '2px',
        'toniq-list-table-header-radius': '16px',
        'toniq-list-table-row-gap': '36px',
    },
    events: {
        pageChange: defineElementEvent<number>(),
    },
    styles: ({cssVars}) => css`
        :host {
            display: flex;
            overflow-x: auto;
            border-radius: ${cssVars['toniq-list-table-header-radius'].value};
            border: 1px solid ${toniqColors.dividerFaint.foregroundColor};
        }

        /* Firefox */
        :host {
            scrollbar-width: thin;
            scrollbar-color: ${scrollbarColorCssVar} ${scrollbarTrackColorCssVar};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        :host::-webkit-scrollbar-track {
            background: ${scrollbarTrackColorCssVar};
            border-radius: 8px;
        }

        :host::-webkit-scrollbar-thumb {
            background-color: ${scrollbarColorCssVar};
            border-radius: 8px;
        }

        .table-wrapper {
            position: relative;
            overflow-x: auto;
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            background-color: ${toniqColors.pageInteraction.backgroundColor};
            border-radius: ${cssVars['toniq-list-table-header-radius'].value};
            border: 24px solid ${toniqColors.pageInteraction.backgroundColor};
        }

        .table-wrapper.can-scroll {
            gap: 16px;
            border-radius: ${cssVars['toniq-list-table-header-radius'].value};
            border: 16px solid ${toniqColors.pageInteraction.backgroundColor};
        }

        .table-list {
            min-height: 40px;
            width: 100%;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: thin;
            scrollbar-color: ${scrollbarColorCssVar} ${scrollbarTrackColorCssVar};
        }

        .table-list.hidden {
            visibility: hidden;
            opacity: 0;
        }

        .header {
            ${toniqFontStyles.labelFont};
        }

        .scroll-indicator {
            height: 16px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(
                to right,
                transparent,
                ${toniqColors.pageInteraction.backgroundColor}
            );
        }

        .scroll-indicator ${ToniqIcon} {
            height: 16px;
            width: 16px;
            opacity: 0.6;
        }

        .indicator.hidden {
            display: none;
        }

        .column-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            background: ${toniqColors.pageInteraction.backgroundColor};
        }

        .column-wrapper.sticky {
            position: sticky;
            z-index: 2;
            filter: drop-shadow(rgba(0, 0, 0, 0.12) 4px 1px 3px);
            will-change: filter;
        }

        .column-wrapper.fill {
            flex: 1;
        }

        .column-content {
            height: 48px;
            max-height: 48px;
            width: -webkit-fill-available;
            width: -moz-available;
            align-items: center;
            display: flex;
            position: relative;
        }

        .column-content * {
            text-wrap: nowrap;
        }

        .column-wrapper:not(:first-of-type) .column-content {
            padding-left: calc(${cssVars['toniq-list-table-row-gap'].value} / 2);
        }

        .column-wrapper:not(:last-of-type) .column-content {
            padding-right: calc(${cssVars['toniq-list-table-row-gap'].value} / 2);
        }

        .column-content:not(:first-of-type) {
            border: ${cssVars['toniq-list-table-border-width'].value} solid transparent;
            border-top-color: ${toniqColors.dividerFaint.foregroundColor};
            cursor: pointer;
        }

        .column-content:last-of-type {
            border-bottom-color: ${toniqColors.dividerFaint.foregroundColor};
        }

        .column-content.hover {
            border-top-color: ${toniqColors.dropShadow.backgroundColor};
        }

        .column-content.hover:last-of-type {
            border-bottom-color: ${toniqColors.dropShadow.backgroundColor};
        }

        .column-content.hover + .column-content {
            border-top-color: ${toniqColors.dropShadow.backgroundColor};
        }

        .content-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
        }

        .loading-wrapper {
            transition: ${toniqDurations.pretty};
            opacity: 1;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            top: 0;
            left: 0;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 200;
            background-color: ${toniqColors.opaqueOverlay.backgroundColor};
        }

        .blocked-pagination {
            opacity: 0.3;
            pointer-events: none;
        }
    `,
    stateInitStatic: {
        debouncedResize: perInstance(() =>
            createDebounce(DebounceStyle.FirstThenWait, {milliseconds: 30}),
        ),
        canScroll: false,
        tableListLeft: 0,
        hoverIndex: undefined as undefined | number,
    },
    renderCallback({inputs, state, updateState, events, dispatch, host}) {
        const enabledColumns = inputs.columns.filter((column) => !column.disabled);
        // Duplicate first entry for the header column
        const rows: ReadonlyArray<Readonly<ListTableRow<any>>> = [
            inputs.rows[0],
            ...inputs.rows,
        ].filter(isTruthy);

        function tableUpdate() {
            const container = host.shadowRoot.querySelector('.table-list') as HTMLElement;
            if (container instanceof HTMLElement) {
                state.debouncedResize(() => {
                    requestAnimationFrame(() => {
                        const newCanScroll = container.scrollWidth > container.clientWidth;
                        const newTableListLeft = container.getBoundingClientRect().left;

                        if (
                            newCanScroll !== state.canScroll ||
                            newTableListLeft !== state.tableListLeft
                        ) {
                            updateState({
                                canScroll: newCanScroll,
                                tableListLeft: newTableListLeft,
                            });
                        }
                    });
                });
            }
        }

        function listItem(columnItem: ListTableColumn) {
            function calculateLeft(columnKey: string) {
                const wrapperEl = host.shadowRoot.querySelector(
                    `.column-wrapper[data-column="${columnKey}"]`,
                );

                if (!(wrapperEl instanceof HTMLElement)) {
                    return css`
                        left: 0px;
                    `;
                }

                const wrapperLeft = wrapperEl.getBoundingClientRect().left;
                const left = state.tableListLeft ? wrapperLeft - state.tableListLeft : wrapperLeft;
                return css`
                    left: ${left > 0 ? left : 0}px;
                `;
            }

            const isSticky = !!columnItem.option?.sticky && state.canScroll;

            return html`
                <div
                    data-column=${columnItem.key as string}
                    class=${classMap({
                        'column-wrapper': true,
                        sticky: isSticky,
                        fill: !!columnItem.option?.spaceEvenly,
                    })}
                    style=${ifDefined(
                        isSticky ? calculateLeft(columnItem.key as string) : undefined,
                    )}
                >
                    ${repeat(
                        rows,
                        (row, rowIndex) => rowIndex,
                        (row, rowIndex) => {
                            const rowItem = {
                                contents: row.cells[columnItem.key as keyof typeof row],
                                rowActions: row.rowActions,
                            } as {
                                contents: HtmlInterpolation;
                                rowActions: typeof row.rowActions;
                            };

                            return html`
                                <div
                                    ${listen('mouseenter', () => {
                                        updateState({
                                            hoverIndex: rowIndex,
                                        });
                                    })}
                                    ${listen('mouseleave', () => {
                                        updateState({
                                            hoverIndex: undefined,
                                        });
                                    })}
                                    ${rowIndex > 0
                                        ? listen('click', (clickEvent) => {
                                              rowItem?.rowActions?.click?.({
                                                  clickEvent,
                                                  dispatch,
                                              });
                                          })
                                        : nothing}
                                    class=${classMap({
                                        'column-content': true,
                                        hover: rowIndex === state.hoverIndex,
                                    })}
                                >
                                    ${renderIf(
                                        rowIndex === 0,
                                        html`
                                            <span class="header" style=${columnItem.style}>
                                                ${columnItem.title}
                                            </span>
                                        `,
                                        guard(
                                            [
                                                rowIndex,
                                                row.cells[columnItem.key as keyof typeof row],
                                            ],
                                            () => rowItem.contents,
                                        ),
                                    )}
                                </div>
                            `;
                        },
                    )}
                </div>
            `;
        }

        const paginationTemplate =
            inputs.pagination && inputs.pagination?.pageCount > 1
                ? html`
                      <${ToniqPagination.assign({
                          currentPage: inputs.pagination.currentPage,
                          pageCount: inputs.pagination.pageCount,
                          paginationAction: inputs.paginationAction,
                      })}
                          class=${classMap({
                              'blocked-pagination': !!inputs.showLoading,
                          })}
                          ${listen(ToniqPagination.events.pageChange, (event) => {
                              dispatch(new events.pageChange(event.detail));
                          })}
                      ></${ToniqPagination}>
                  `
                : nothing;

        const isLoading = !!inputs.showLoading || !!!rows.length || !!!enabledColumns.length;

        return html`
            <div
                class=${classMap({
                    'table-wrapper': true,
                    'can-scroll': state.canScroll,
                })}
            >
                <div
                    class=${classMap({
                        'table-list': true,
                        hidden: isLoading,
                    })}
                    ${onDomCreated(() => {
                        tableUpdate();
                        window.addEventListener('resize', () => {
                            tableUpdate();
                        });
                    })}
                    ${listen('scroll', () => {
                        tableUpdate();
                    })}
                    ${listen('keydown', (event) => {
                        if (inputs.showLoading) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                        }
                    })}
                >
                    ${repeat(
                        enabledColumns,
                        (columnItem, columnIndex) => columnIndex,
                        (columnItem) => listItem(columnItem),
                    )}
                    ${renderIf(
                        state.canScroll,
                        html`
                            <div class="scroll-indicator">
                                <${ToniqIcon.assign({
                                    icon: ChevronsRight16Icon,
                                })}></${ToniqIcon}>
                            </div>
                        `,
                    )}
                </div>
                ${renderIf(
                    isLoading,
                    html`
                        <div class="loading-wrapper">
                            <${ToniqLoading.assign({
                                size: ToniqLoadingSizeEnum.Large,
                            })}></${ToniqLoading}>
                        </div>
                    `,
                )}
                ${paginationTemplate}
            </div>
        `;
    },
});
