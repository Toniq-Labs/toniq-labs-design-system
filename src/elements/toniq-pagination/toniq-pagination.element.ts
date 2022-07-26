import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {pagination} from '../../augments/array';
import {ArrowLeft24Icon, ArrowRight24Icon} from '../../icons';
import {
    applyBackgroundAndForeground,
    noUserSelect,
    removeNativeFormStyles,
    toniqColors,
    toniqFontStyles,
} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqPagination = defineToniqElement({
    tagName: 'toniq-pagination',
    props: {
        /** Set the selected page */
        currentPage: 1,
        /** This is required to set the total pages */
        pageCount: 10,
        /**
         * The number of pages to show. When pageCount exceeds this number, the excess will be
         * converted into "...". Instances of "..." are included in the pagesShown count.
         */
        pagesShown: 7,
    },
    styles: css`
        :host {
            display: flex;
        }

        button {
            ${removeNativeFormStyles}
            display: flex;
            align-items: center;
            ${noUserSelect};
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        .control:hover {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${applyBackgroundAndForeground(toniqColors.accentTertiary)};
        }

        .page {
            display: flex;
            position: relative;
            width: 32px;
            height: 32px;
            ${toniqFontStyles.labelFont}
            ${noUserSelect}
            justify-content: center;
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
        }

        .page.selected {
            color: white;
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
                pagination(props.currentPage, props.pageCount, props.pagesShown),
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
