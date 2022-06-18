import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {range} from 'lit/directives/range.js';
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
        page: undefined,
        pageSize: 0,
        currentPage: 1,
    },
    styles: css`
        ${ToniqButton}::part(inner-button) {
            margin: 0 8px;
            padding: 4px;
        }

        .controls {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${removeNativeButtonStyles}
            ${toniqFontStyles.labelFont}
        }

        .page.selected {
            color: white;
            cursor: auto;
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
        pageChange: defineElementEvent<number>(),
    },
    renderCallback: ({props, setProps}) => {
        const spreadable = {disabled: 'disabled'};
        return html`
            <div>
                <slot>${props.page}</slot>
                <div class="controls">
                    <${ToniqButton}
                        ${assign(ToniqButton.props.variant, ToniqButtonVariant.Secondary)}
                        ${listen('click', () =>
                            setProps({
                                currentPage: props.currentPage > 1 ? props.currentPage - 1 : 1,
                            }),
                        )}
                    >
                        <${ToniqIcon}
                            ${assign(ToniqIcon.props.icon, ArrowLeft24Icon)}></${ToniqIcon}>
                    </${ToniqButton}>
                    ${map(
                        range(8),
                        (i) =>
                            html`
                                <button
                                    class=${classMap({
                                        page: true,
                                        selected: props.currentPage === i + 1,
                                    })}
                                    ?disabled=${props.currentPage === i + 1}
                                    ${listen('click', () => setProps({currentPage: i + 1}))}
                                >
                                    ${i + 1}
                                </button>
                            `,
                    )}
                    <${ToniqButton}
                        ${assign(ToniqButton.props.variant, ToniqButtonVariant.Secondary)}
                        ${listen('click', () =>
                            setProps({
                                currentPage: props.currentPage < 8 ? props.currentPage + 1 : 8,
                            }),
                        )}
                    >
                        <${ToniqIcon}
                            ${assign(ToniqIcon.props.icon, ArrowRight24Icon)}></${ToniqIcon}>
                    </${ToniqButton}>
                </div>
            </div>
        `;
    },
});
