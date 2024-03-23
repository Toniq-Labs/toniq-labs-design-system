import {DebounceStyle, createDebounce} from '@augment-vir/common';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    nothing,
    onResize,
    perInstance,
    renderIf,
    unsafeCSS,
} from 'element-vir';
import {ChevronsRight16Icon} from '../../icons/svgs/core-16/chevrons-right-16.icon';
import {toniqColors, toniqDurations, toniqFontStyles} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqLoading, ToniqLoadingSizeEnum} from '../toniq-loading/toniq-loading.element';
import {ToniqPagination} from '../toniq-pagination/toniq-pagination.element';
import {HeaderItem, ListTableInputs, ListTableRow} from './list-table-inputs';

const scrollbarColorCssVar = toniqColors.pageInteraction.foregroundColor;
const scrollbarTrackColorCssVar = toniqColors.accentSecondary.backgroundColor;

export const ToniqListTable = defineToniqElement<ListTableInputs>()({
    tagName: 'toniq-list-table',
    cssVars: {
        'toniq-list-table-border-width': '1px',
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
            border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* Firefox */
        :host {
            scrollbar-width: auto;
            scrollbar-color: ${scrollbarColorCssVar} ${scrollbarTrackColorCssVar};
        }

        /* Chrome, Edge, and Safari */
        :host::-webkit-scrollbar {
            width: 2px;
            height: 2px;
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
            overflow-y: hidden;
            overflow-x: auto;

            display: flex;
            flex-grow: 1;

            flex-direction: column;
            align-items: center;
            gap: 32px;

            background: ${toniqColors.pageInteraction.backgroundColor};
            border-radius: ${cssVars['toniq-list-table-header-radius'].value};
            border: 24px solid ${toniqColors.pageInteraction.backgroundColor};
        }

        .table-wrapper.can-scroll {
            gap: 16px;
            border-radius: ${cssVars['toniq-list-table-header-radius'].value};
            border: 16px solid ${toniqColors.pageInteraction.backgroundColor};
        }

        .table-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            overflow-x: auto;
        }

        .table-list {
            scrollbar-width: auto;
            scrollbar-color: ${scrollbarColorCssVar} ${scrollbarTrackColorCssVar};
        }

        .header {
            position: absolute;
            top: 0;
            ${toniqFontStyles.labelFont};
        }

        .scroll-indicator {
            height: 32px;
            padding-left: 8px;
            position: absolute;
            top: 0;
            right: 0;
            background: ${toniqColors.pageInteraction.backgroundColor};
        }

        .scroll-indicator ${ToniqIcon} {
            height: 16px;
            width: 16px;
            opacity: 0.6;
        }

        .indicator.hidden {
            display: none;
        }

        .row-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            background: ${toniqColors.pageInteraction.backgroundColor};
        }

        .row-wrapper:first-of-type,
        .row-wrapper:first-of-type .row-item {
            max-height: 32px;
        }

        .row-wrapper:not(:first-of-type) .row-item {
            border-top-color: ${toniqColors.dividerFaint.foregroundColor};
        }

        .row-item,
        .row-content {
            display: flex;
            align-items: center;
            background: ${toniqColors.pageInteraction.backgroundColor};
        }

        .row-content {
            padding: 12px 0;
        }

        .row-content.hidden {
            visibility: hidden;
        }

        .row-content,
        .row-content * {
            text-wrap: nowrap;
        }

        .row-item {
            height: -webkit-fill-available;
            border: ${cssVars['toniq-list-table-border-width'].value} solid transparent;
        }

        .row-item.sticky {
            position: sticky;
            filter: drop-shadow(rgba(0, 0, 0, 0.12) 4px 1px 3px);
            will-change: filter;
            z-index: 100;
        }

        .row-wrapper:last-child .row-item {
            border-bottom-color: ${toniqColors.dividerFaint.foregroundColor};
        }

        .row-item:not(:first-child) {
            padding-left: calc(${cssVars['toniq-list-table-row-gap'].value} / 2);
        }

        .row-item:not(:last-child) {
            padding-right: calc(${cssVars['toniq-list-table-row-gap'].value} / 2);
        }

        .row-item:last-of-type,
        .row-item:last-of-type .row-content {
            flex-grow: 1;
        }

        .loading-wrapper.hidden {
            visibility: none;
            pointer-events: none;
            opacity: 0;
            transition: ${toniqDurations.interaction};
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
            background-color: rgba(255, 255, 255, 0.9);
        }

        .blocked-pagination {
            opacity: 0.3;
            pointer-events: none;
        }
    `,
    stateInitStatic: {
        table: {
            header: [] as HeaderItem[],
            row: [] as any[],
        },
        canScroll: false,
        debouncedResize: perInstance(() =>
            createDebounce(DebounceStyle.FirstThenWait, {milliseconds: 30}),
        ),
    },
    initCallback({inputs, updateState}) {
        const enabledColumns = inputs.columns.filter((column) => !column.disabled);
        updateState({
            table: {
                header: enabledColumns.map((item) => {
                    return {
                        title: item.title,
                        key: item.key,
                        left: 0,
                        mobile: {
                            sticky: item.mobile?.sticky,
                        },
                    };
                }) as HeaderItem[],
                row: [
                    inputs.rows[0],
                    ...inputs.rows,
                ],
            },
        });
    },
    renderCallback({inputs, state, updateState, events, dispatch}) {
        function tableUpdate(container: HTMLElement | EventTarget | null) {
            if (container instanceof HTMLElement) {
                const containerLeft = container.getBoundingClientRect().left;
                const header = state.table.header.map((item: HeaderItem, index: number) => {
                    const rowItem = container.querySelectorAll('.row-item')[index] as HTMLElement;
                    const left = rowItem?.getBoundingClientRect().left;
                    return {
                        ...item,
                        left: left - containerLeft,
                    };
                });
                state.debouncedResize(() => {
                    updateState({
                        table: {
                            ...state.table,
                            header,
                        },
                        canScroll: container.scrollWidth > container.clientWidth,
                    });
                });
            }
        }

        const paginationTemplate =
            inputs.pagination && inputs.pagination?.pageCount > 1
                ? html`
                      <${ToniqPagination.assign({
                          currentPage: inputs.pagination.currentPage,
                          pageCount: inputs.pagination.pageCount,
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

        function listItem(row: ListTableRow<any>, rowIndex: number) {
            return html`
                <div
                    class="row-wrapper"
                    ${listen('click', (clickEvent) => {
                        if (rowIndex > 0) {
                            row.rowActions?.click?.({clickEvent, dispatch});
                        }
                    })}
                >
                    ${state.table.header.map((item) => {
                        const contents = row.cells[item.key as keyof typeof row];
                        return html`
                            <div
                                class=${classMap({
                                    'row-item': true,
                                    sticky: item.mobile?.sticky
                                        ? item.mobile?.sticky && state.canScroll
                                        : false,
                                })}
                                style=${css`
                                    left: ${unsafeCSS(`${item.left}px`)};
                                `}
                            >
                                <div
                                    class=${classMap({
                                        'row-content': true,
                                        hidden: rowIndex === 0,
                                    })}
                                >
                                    ${contents}
                                </div>
                                ${renderIf(
                                    rowIndex === 0,
                                    html`
                                        <span class="header">${item.title}</span>
                                    `,
                                )}
                            </div>
                        `;
                    })}
                </div>
            `;
        }

        return html`
            <div
                class=${classMap({
                    'table-wrapper': true,
                    'can-scroll': state.canScroll,
                })}
            >
                <div
                    class="table-list"
                    ${onResize((event) => {
                        tableUpdate(event.target);
                    })}
                    ${listen('scroll', (event) => {
                        tableUpdate(event.target);
                    })}
                    ${listen('keydown', (event) => {
                        if (inputs.showLoading) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                        }
                    })}
                >
                    ${state.table.row.map((item: ListTableRow<any>, index: number) => {
                        return html`
                            ${listItem(item, index)}
                        `;
                    })}
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
                <div class="loading-wrapper ${classMap({hidden: !inputs.showLoading})}">
                    <${ToniqLoading.assign({
                        size: ToniqLoadingSizeEnum.Large,
                    })}></${ToniqLoading}>
                </div>
                ${paginationTemplate}
            </div>
        `;
    },
});
