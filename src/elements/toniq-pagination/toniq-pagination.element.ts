import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {clamp} from '../../augments/number';
import {ArrowLeft24Icon, ArrowRight24Icon} from '../../icons';
import {
    applyBackgroundAndForeground,
    noUserSelect,
    removeNativeButtonStyles,
    toniqColors,
    toniqFontStyles,
} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {buttonBorderRadius} from '../toniq-button/toniq-button.element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqPagination = defineToniqElement({
    tagName: 'toniq-pagination',
    props: {
        /** Set the selected page */
        currentPage: 1,
        /** This is required to set the total pages */
        pageCount: 10,
        /** Controls the fixed number of pages */
        pageSize: 7,
    },
    styles: css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        button {
            ${removeNativeButtonStyles}
        }

        .control {
            border-radius: ${buttonBorderRadius};
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            margin: 0 8px;
            padding: 4px;
        }

        .control:hover {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .control[disabled] {
            cursor: auto;
            ${applyBackgroundAndForeground(toniqColors.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${toniqFontStyles.labelFont}
            ${noUserSelect}
        }

        .page[disabled],
        .page.selected {
            cursor: auto;
        }

        .page:not(.selected):not([disabled]):hover {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
        }

        .page.selected {
            color: white;
        }

        .page.selected::after {
            content: '';
            position: absolute;
            z-index: -1;
            height: 32px;
            width: 32px;
            margin: auto;
            inset: 0;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
            border-radius: 16px;
        }
    `,
    events: {
        /** For fetching initial API calls and data for rendering pagination */
        created: defineElementEvent<undefined>(),
        /** Called on click page number */
        pageChange: defineElementEvent<number>(),
        /** Called on click previous button */
        previous: defineElementEvent<number>(),
        /** Called on click next button */
        next: defineElementEvent<number>(),
    },
    initCallback: ({dispatch, events}) => {
        dispatch(new events.created(undefined));
    },
    renderCallback: ({props, events, setProps, dispatch}) => {
        /**
         * Set minimum page size to 5. Lesser than 5 will show a [1 ...] or [1 ... ... 10] scenario
         * which makes no sense.
         */
        const MINIMUM_PAGE_SIZE = 5;

        const getRange = (start: number, end: number) => {
            const length = end - start + 1;
            return Array.from({length}, (_, i) => start + i);
        };

        const pagination = (currentPage: number, pageCount: number, pageSize: number) => {
            let delta: number;
            currentPage = clamp(currentPage, 1, pageCount);
            pageSize = clamp(pageSize, MINIMUM_PAGE_SIZE, pageCount);
            const centerPageSize = pageSize - 5;
            const boundaryPageSize = pageSize - 3;

            if (pageCount <= pageSize) {
                delta = pageSize;
            } else {
                delta =
                    currentPage < boundaryPageSize || currentPage > pageCount - boundaryPageSize
                        ? boundaryPageSize
                        : centerPageSize;
            }

            const range = {
                start: Math.round(currentPage - delta / 2),
                end: Math.round(currentPage + delta / 2),
            };

            if (range.start - 1 === 1 || range.end + 1 === pageCount) {
                range.start += 1;
                range.end += 1;
            }

            let pages: (string | number)[] =
                currentPage > delta
                    ? getRange(
                          Math.min(range.start, pageCount - delta),
                          Math.min(range.end, pageCount),
                      )
                    : getRange(1, Math.min(pageCount, delta + 1));

            if (currentPage > pageCount - boundaryPageSize) {
                pages = getRange(pageCount - delta, pageCount);
            }

            const withDots = (value: number, pair: (string | number)[]) =>
                pages.length + 1 !== pageCount ? pair : [value];
            if (pages[0] !== 1) {
                pages = withDots(1, [
                    1,
                    '...',
                ]).concat(pages);
            }
            const lastPage = pages[pages.length - 1];
            if (lastPage && lastPage < pageCount) {
                pages = pages.concat(
                    withDots(pageCount, [
                        '...',
                        pageCount,
                    ]),
                );
            }

            return pages;
        };

        if (props.pageCount <= 1) {
            return html``;
        } else {
            return html`
            <button
                ${listen('click', () => {
                    if (props.currentPage > 1) {
                        setProps({currentPage: props.currentPage - 1});
                        dispatch(new events.previous(props.currentPage));
                    }
                })}
                class="control"
                ?disabled=${props.currentPage <= 1}
            >
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, ArrowLeft24Icon)}></${ToniqIcon}>
            </button>
            ${map(
                pagination(props.currentPage, props.pageCount, props.pageSize),
                (i: string | number) =>
                    html`
                        <button
                            class=${classMap({
                                page: true,
                                selected: props.currentPage === i,
                            })}
                            ?disabled=${i === '...' || props.currentPage === i}
                            ${listen('click', () => {
                                if (typeof i === 'number') {
                                    setProps({currentPage: i});
                                    dispatch(new events.pageChange(i));
                                }
                            })}
                        >
                            ${i}
                        </button>
                    `,
            )}
            <button
                ${listen('click', () => {
                    if (props.currentPage < props.pageCount) {
                        setProps({currentPage: props.currentPage + 1});
                        dispatch(new events.next(props.currentPage));
                    }
                })}
                class="control"
                ?disabled=${props.currentPage >= props.pageCount}
            >
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, ArrowRight24Icon)}></${ToniqIcon}>
            </button>
        `;
        }
    },
});
