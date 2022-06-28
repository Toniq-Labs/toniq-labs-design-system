import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {clamp} from '../../augments/number';
import {ArrowLeft24Icon, ArrowRight24Icon} from '../../icons';
import {
    applyBackgroundAndForeground,
    removeNativeButtonStyles,
    toniqColors,
    toniqFontStyles,
} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqButton, ToniqButtonVariant} from '../toniq-button/toniq-button.element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqPagination = defineToniqElement({
    tagName: 'toniq-pagination',
    props: {
        currentPage: 1,
        totalPages: 1,
        pageSize: 7,
    },
    styles: css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        ${ToniqButton}::part(inner-button) {
            margin: 0 8px;
            padding: 4px;
        }

        ${ToniqButton}::part(inner-button):hover {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        ${ToniqButton}.disabled::part(inner-button) {
            pointer-events: none;
            ${applyBackgroundAndForeground(toniqColors.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${removeNativeButtonStyles}
            ${toniqFontStyles.labelFont}
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
        /** Called on click page number */
        pageChange: defineElementEvent<number>(),
        /** Called on click previous button */
        previous: defineElementEvent<number>(),
        /** Called on click next button */
        next: defineElementEvent<number>(),
        /** Fetch initial API calls and data */
        created: defineElementEvent<null>(),
    },
    initCallback: ({dispatch, events}) => {
        dispatch(new events.created(null));
    },
    renderCallback: ({props, events, setProps, dispatch}) => {
        const MINIMUM_PAGE_SIZE = 7;

        setProps({
            currentPage: clamp(props.currentPage, 1, props.totalPages),
            pageSize: clamp(props.pageSize, MINIMUM_PAGE_SIZE, props.totalPages),
        });

        const getRange = (start: number, end: number) => {
            return Array(end - start + 1)
                .fill(undefined)
                .map((v, i) => i + start);
        };

        /**
         * Pagination with max width of 7 pages. This prevents the pages button to move around as
         * user selects pages.
         */
        const pagination = (currentPage: number, totalPages: number) => {
            let delta: number;
            if (totalPages <= props.pageSize) {
                delta = props.pageSize;
            } else {
                // delta is 2: [1 ... 4 5 6 ... 10]
                // delta is 4: [1 2 3 4 5...10]
                delta =
                    currentPage > props.pageSize - 3 &&
                    currentPage < totalPages - props.pageSize + 4
                        ? props.pageSize - 5
                        : props.pageSize - 3;
            }

            const range = {
                start: Math.round(currentPage - delta / 2),
                end: Math.round(currentPage + delta / 2),
            };

            if (range.start - 1 === 1 || range.end + 1 === totalPages) {
                range.start += 1;
                range.end += 1;
            }

            let pages: (string | number)[] =
                currentPage > delta
                    ? getRange(
                          Math.min(range.start, totalPages - delta),
                          Math.min(range.end, totalPages),
                      )
                    : getRange(1, Math.min(totalPages, delta + 1));

            const withDots = (value: number, pair: (string | number)[]) =>
                pages.length + 1 !== totalPages ? pair : [value];
            if (pages[0] !== 1) {
                pages = withDots(1, [
                    1,
                    '...',
                ]).concat(pages);
            }
            const lastPage = pages[pages.length - 1];
            if (lastPage && lastPage < totalPages) {
                pages = pages.concat(
                    withDots(totalPages, [
                        '...',
                        totalPages,
                    ]),
                );
            }

            return pages;
        };

        return html`
            <div>
                <${ToniqButton}
                    ${assign(ToniqButton.props.variant, ToniqButtonVariant.Secondary)}
                    ${listen('click', () => {
                        if (props.currentPage > 1) {
                            setProps({currentPage: props.currentPage - 1});
                            dispatch(new events.previous(props.currentPage));
                        }
                    })}
                    class=${props.currentPage <= 1 ? 'disabled' : ''}
                    ?disabled=${props.currentPage <= 1}
                >
                    <${ToniqIcon}
                        ${assign(ToniqIcon.props.icon, ArrowLeft24Icon)}></${ToniqIcon}>
                </${ToniqButton}>
                ${map(
                    pagination(props.currentPage, props.totalPages),
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
                <${ToniqButton}
                    ${assign(ToniqButton.props.variant, ToniqButtonVariant.Secondary)}
                    ${listen('click', () => {
                        if (props.currentPage < props.totalPages) {
                            setProps({currentPage: props.currentPage + 1});
                            dispatch(new events.next(props.currentPage));
                        }
                    })}
                    class=${props.currentPage >= props.totalPages ? 'disabled' : ''}
                    ?disabled=${props.currentPage >= props.totalPages}
                >
                    <${ToniqIcon}
                        ${assign(ToniqIcon.props.icon, ArrowRight24Icon)}></${ToniqIcon}>
                </${ToniqButton}>
            </div>
        `;
    },
});
