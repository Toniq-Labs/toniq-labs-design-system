import {DebounceStyle, createDebounce, isTruthy} from '@augment-vir/common';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    nothing,
    onDomCreated,
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
import {ListTableInputs, ListTableRow} from './list-table-inputs';

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
            min-height: 40px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            overflow-x: auto;
            scrollbar-width: auto;
            scrollbar-color: ${scrollbarColorCssVar} ${scrollbarTrackColorCssVar};
        }

        .table-list.hidden {
            visibility: hidden;
            opacity: 0;
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
            cursor: pointer;
        }

        .row-wrapper:first-of-type,
        .row-wrapper:first-of-type .row-item {
            max-height: 32px;
        }

        .row-wrapper:not(:first-of-type):hover:before {
            content: '';
            position: absolute;
            top: 0;
            height: 2px;
            width: 100%;
            background-color: #e2e9f3;
        }

        .row-wrapper:not(:first-of-type):hover:after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 100%;
            background-color: #e2e9f3;
        }

        .row-wrapper:not(:first-of-type):hover .row-item,
        .row-wrapper:not(:first-of-type):hover + .row-wrapper .row-item {
            border-top-color: transparent;
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
            min-height: 48px;
        }

        .row-content.hidden {
            visibility: hidden;
        }

        .row-content,
        .row-content * {
            text-wrap: nowrap;
        }

        .row-item {
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
            visibility: hidden;
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
        canScroll: false,
        debouncedResize: perInstance(() =>
            createDebounce(DebounceStyle.FirstThenWait, {milliseconds: 30}),
        ),
        rowStyles: {} as {
            [key: string]: {
                width: number | undefined;
                left: number | undefined;
            };
        },
        isPainting: false,
        itemsPainted: 0,
        pageCountKey: 0,
    },
    initCallback({inputs, state, updateState}) {
        const enabledColumns = inputs.columns.filter((column) => !column.disabled);
        updateState({
            rowStyles: enabledColumns.reduce((accum, item) => {
                accum[item.key as string] = {
                    width: undefined,
                    left: undefined,
                };
                return accum;
            }, state.rowStyles),
        });
    },
    renderCallback({inputs, state, updateState, events, dispatch}) {
        const enabledColumns = inputs.columns.filter((column) => !column.disabled);
        // Duplicate first entry for the header column
        const rows = [
            inputs.rows[0],
            ...inputs.rows,
        ].filter(isTruthy);

        function tableUpdate(container: HTMLElement | EventTarget | null) {
            if (container instanceof HTMLElement) {
                state.debouncedResize(() => {
                    updateState({
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
                              updateState({
                                  pageCountKey: inputs.pagination?.pageCount
                                      ? inputs.pagination?.pageCount
                                      : state.pageCountKey + 1,
                              });
                              dispatch(new events.pageChange(event.detail));
                          })}
                      ></${ToniqPagination}>
                  `
                : nothing;

        function listItem(row: ListTableRow<any>, rowIndex: number) {
            return html`
                <div
                    class="row-wrapper"
                    ${rowIndex > 0
                        ? listen('click', (clickEvent) => {
                              row.rowActions?.click?.({clickEvent, dispatch});
                          })
                        : nothing}
                >
                    ${enabledColumns.map((item, index) => {
                        const contents = row.cells[item.key as keyof typeof row];

                        const rowItemStyle = css`
                            left: ${unsafeCSS(`${state.rowStyles[item.key as string]?.left}px`)};
                            min-width: ${index >= enabledColumns.length - 1
                                ? unsafeCSS('unset')
                                : unsafeCSS(`${state.rowStyles[item.key as string]?.width}px`)};
                        `;
                        return html`
                            <div
                                class=${classMap({
                                    'row-item': true,
                                    sticky: item.mobile?.sticky
                                        ? item.mobile?.sticky && state.canScroll
                                        : false,
                                })}
                                style=${item.style
                                    ? css`
                                          ${item.style} ${rowItemStyle}
                                      `
                                    : rowItemStyle}
                            >
                                <div
                                    class=${classMap({
                                        'row-content': true,
                                        hidden: rowIndex === 0,
                                    })}
                                    ${onDomCreated((container) => {
                                        const parentEl = container.closest('.table-list');
                                        const containerLeft =
                                            parentEl?.getBoundingClientRect().left;

                                        const rowItem = parentEl?.querySelectorAll('.row-item')[
                                            index
                                        ] as HTMLElement;
                                        const left = rowItem?.getBoundingClientRect().left;

                                        const currentWidth =
                                            container.getBoundingClientRect().width;
                                        if (
                                            !state.rowStyles[item.key as string]?.width ||
                                            currentWidth >
                                                (state.rowStyles[item.key as string]
                                                    ?.width as number)
                                        ) {
                                            updateState({
                                                rowStyles: {
                                                    ...state.rowStyles,
                                                    [item.key]: {
                                                        width: currentWidth,
                                                        left: containerLeft
                                                            ? left - containerLeft
                                                            : left,
                                                    },
                                                },
                                            });
                                        }
                                        updateState({
                                            itemsPainted: state.itemsPainted + 1,
                                        });
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

        const isLoading =
            state.itemsPainted < enabledColumns.length * rows.length || !!inputs.showLoading;

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
                    ${rows.filter(isTruthy).map((item: ListTableRow<any>, index: number) => {
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

                <div
                    class=${classMap({
                        'loading-wrapper': true,
                        hidden: !isLoading,
                    })}
                >
                    <${ToniqLoading.assign({
                        size: ToniqLoadingSizeEnum.Large,
                    })}></${ToniqLoading}>
                </div>
                ${paginationTemplate}
            </div>
        `;
    },
});
