import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
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

export const ToniqPagination = defineToniqElement<{
    /** Set the selected page */
    currentPage: number;
    /** This is required to set the total pages */
    pageCount: number;
    /**
     * The number of pages to show. When pageCount exceeds this number, the excess will be converted
     * into "...". Instances of "..." are included in the pagesShown count.
     */
    pagesShown?: number | undefined;
}>()({
    tagName: 'toniq-pagination',
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
    renderCallback: ({inputs, events, dispatch}) => {
        if (inputs.pageCount <= 1) {
            return html``;
        } else {
            return html`
            <button
                ${listen('click', () => {
                    if (inputs.currentPage > 1) {
                        dispatch(new events.previous(inputs.currentPage - 1));
                    }
                })}
                class="control"
                ?disabled=${inputs.currentPage <= 1}
            >
                <${ToniqIcon}
                    ${assign(ToniqIcon, {icon: ArrowLeft24Icon})}></${ToniqIcon}>
            </button>
            ${pagination(inputs.currentPage, inputs.pageCount, inputs.pagesShown).map(
                (entry) =>
                    html`
                        <button
                            class=${classMap({
                                page: true,
                                selected: inputs.currentPage === entry,
                            })}
                            ?disabled=${entry === '...' || inputs.currentPage === entry}
                            ${listen('click', () => {
                                // ignore the "..." entries
                                if (typeof entry === 'number') {
                                    dispatch(new events.pageChange(entry));
                                }
                            })}
                        >
                            ${entry}
                        </button>
                    `,
            )}
            <button
                ${listen('click', () => {
                    if (inputs.currentPage < inputs.pageCount) {
                        dispatch(new events.next(inputs.currentPage + 1));
                    }
                })}
                class="control"
                ?disabled=${inputs.currentPage >= inputs.pageCount}
            >
                <${ToniqIcon}
                    ${assign(ToniqIcon, {icon: ArrowRight24Icon})}></${ToniqIcon}>
            </button>
        `;
        }
    },
});
