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
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${noUserSelect};
            justify-content: center;
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
            position: relative;
            width: 32px;
            height: 32px;
            ${toniqFontStyles.labelFont}
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
        pageChange: defineElementEvent<number>(),
    },
    renderCallback: ({inputs, events, dispatch}) => {
        if (inputs.pageCount <= 1) {
            return html``;
        } else {
            return html`
                <button
                    ${listen('click', () => {
                        if (inputs.currentPage > 1) {
                            dispatch(new events.pageChange(inputs.currentPage - 1));
                        }
                    })}
                    class="control"
                    ?disabled=${inputs.currentPage <= 1}
                >
                    <${ToniqIcon} ${assign(ToniqIcon, {icon: ArrowLeft24Icon})}></${ToniqIcon}>
                </button>
                ${pagination(inputs.currentPage, inputs.pageCount, inputs.pagesShown).map(
                    (entry) => {
                        // this happens when the entry is '...'
                        if (typeof entry === 'string') {
                            return html`
                                <div class="page" disabled>${entry}</div>
                            `;
                        } else {
                            return html`
                                <button
                                    class=${classMap({
                                        page: true,
                                        selected: inputs.currentPage === entry,
                                    })}
                                    ?disabled=${inputs.currentPage === entry}
                                    ${listen('click', () => {
                                        dispatch(new events.pageChange(entry));
                                    })}
                                >
                                    ${entry}
                                </button>
                            `;
                        }
                    },
                )}
                <button
                    ${listen('click', () => {
                        if (inputs.currentPage < inputs.pageCount) {
                            dispatch(new events.pageChange(inputs.currentPage + 1));
                        }
                    })}
                    class="control"
                    ?disabled=${inputs.currentPage >= inputs.pageCount}
                >
                    <${ToniqIcon} ${assign(ToniqIcon, {icon: ArrowRight24Icon})}></${ToniqIcon}>
                </button>
            `;
        }
    },
});
