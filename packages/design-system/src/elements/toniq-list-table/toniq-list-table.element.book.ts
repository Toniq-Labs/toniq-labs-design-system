import {joinUrlParts} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {CSSResult, HTMLTemplateResult, css, html, listen, unsafeCSS} from 'element-vir';
import {noNativeFormStyles} from 'vira';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {CryptoBtc24Icon} from '../../icons';
import {toniqFontStyles} from '../../styles';
import {toniqColors} from '../../styles/colors';
import {defineToniqElementNoInputs} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqMiddleEllipsis} from '../toniq-middle-ellipsis/toniq-middle-ellipsis.element';
import {ListTableInputs, createListTableTable} from './list-table-inputs';
import {ToniqListTable} from './toniq-list-table.element';

const bioniqBitcoinCdn = 'https://cdn-bitcoin.bioniq.io';
export const mockInscriptionContentUrl = joinUrlParts(bioniqBitcoinCdn, 'content');
export const mockInscriptionThumbnailUrl = joinUrlParts(bioniqBitcoinCdn, 'thumbnail');

/** Do not use these in production code. Instead, use thumbnail URLs sent from the backend. */
export const mockInscriptionUrl = {
    thumbnail(inscriptionId: string): string {
        return joinUrlParts(mockInscriptionThumbnailUrl, inscriptionId);
    },
    content(inscriptionId: string): string {
        return joinUrlParts(mockInscriptionContentUrl, inscriptionId);
    },
};
// cspell:disable
const entries = Array(5).fill({
    imageUrl: mockInscriptionUrl.thumbnail(
        'b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0',
    ),
    price: html`
        <div
            style=${css`
                display: flex;
                gap: 8px;
            `}
        >
            <${ToniqIcon.assign({
                icon: CryptoBtc24Icon,
            })}></${ToniqIcon}>
            <span>0.00042753</span>
        </div>
    `,
    from: html`
        <${ToniqMiddleEllipsis.assign({
            text: 'QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U',
            copyOnClick: true,
        })}
            style=${css`
                color: ${toniqColors.pageInteraction.foregroundColor};
            `}
            ${listen('click', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
            })}
        ></${ToniqMiddleEllipsis}>
    `,
    to: html`
        <${ToniqMiddleEllipsis.assign({
            text: 'TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V',
            externalLink: 'https://toniqlabs.com',
        })}
            style=${css`
                color: ${toniqColors.pageInteraction.foregroundColor};
            `}
            ${listen('click', (event) => {
                event.stopImmediatePropagation();
            })}
        ></${ToniqMiddleEllipsis}>
    `,
    date: 'April 3, 2024 (1:57pm)',
    time: '2h ago',
    action: html`
        <div
            style=${css`
                width: 100%;
                display: flex;
                justify-content: flex-end;
            `}
        >
            <button
                style=${css`
                    ${noNativeFormStyles}
                    ${toniqFontStyles.boldParagraphFont};
                    color: ${toniqColors.pageInteraction.foregroundColor};
                    cursor: pointer;
                `}
            >
                Cancel
            </button>
        </div>
    `,
}) as ReadonlyArray<{
    imageUrl: string;
    price: HTMLTemplateResult;
    from: HTMLTemplateResult;
    to: HTMLTemplateResult;
    date: string;
    time: string;
    action: HTMLTemplateResult;
}>;

const activityEntries = [
    {
        imageUrl: mockInscriptionUrl.thumbnail(
            'b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0',
        ),
        type: 'Payment Sent',
        price: html`
            <div
                style=${css`
                    display: flex;
                    gap: 8px;
                `}
            >
                <${ToniqIcon.assign({
                    icon: CryptoBtc24Icon,
                })}></${ToniqIcon}>
                <span>0.00042753</span>
            </div>
        `,
        from: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U',
                copyOnClick: true,
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        to: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V',
                externalLink: 'https://toniqlabs.com',
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        date: 'April 3, 2024 (1:57pm)',
        time: '2h ago',
        action: html`
            <div
                style=${css`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${css`
                        ${noNativeFormStyles}
                        ${toniqFontStyles.boldParagraphFont};
                        color: ${toniqColors.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `,
    },
    {
        imageUrl: mockInscriptionUrl.thumbnail(
            'b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0',
        ),
        type: 'Transfer',
        price: html`
            -
        `,
        from: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U',
                copyOnClick: true,
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        to: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V',
                externalLink: 'https://toniqlabs.com',
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        date: 'April 3, 2024 (1:57pm)',
        time: '2h ago',
        action: html`
            <div
                style=${css`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${css`
                        ${noNativeFormStyles}
                        ${toniqFontStyles.boldParagraphFont};
                        color: ${toniqColors.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `,
    },
    {
        imageUrl: mockInscriptionUrl.thumbnail(
            'b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0',
        ),
        type: 'Accept Offer',
        price: html`
            -
        `,
        from: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U',
                copyOnClick: true,
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        to: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'TR5Gqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3E87V',
                externalLink: 'https://toniqlabs.com',
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        date: 'April 3, 2024 (1:57pm)',
        time: '2h ago',
        action: html`
            <div
                style=${css`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${css`
                        ${noNativeFormStyles}
                        ${toniqFontStyles.boldParagraphFont};
                        color: ${toniqColors.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `,
    },
    {
        imageUrl: mockInscriptionUrl.thumbnail(
            'b3e3275c0d0793b9f64a86eaa5e9d6bdad1e69282ebfb59cc68ccbcfd4e093a4i0',
        ),
        type: 'Cancel Listing',
        price: html`
            -
        `,
        from: html`
            <${ToniqMiddleEllipsis.assign({
                text: 'QP6Wqf97r0ydgw9yxfmptu4krqjgy49kx7m5g3K14U',
                copyOnClick: true,
            })}
                style=${css`
                    color: ${toniqColors.pageInteraction.foregroundColor};
                `}
                ${listen('click', (event) => {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                })}
            ></${ToniqMiddleEllipsis}>
        `,
        to: html`
            -
        `,
        date: 'April 3, 2024 (1:57pm)',
        time: '2h ago',
        action: html`
            <div
                style=${css`
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                `}
            >
                <button
                    style=${css`
                        ${noNativeFormStyles}
                        ${toniqFontStyles.boldParagraphFont};
                        color: ${toniqColors.pageInteraction.foregroundColor};
                        cursor: pointer;
                    `}
                >
                    Cancel
                </button>
            </div>
        `,
    },
] as ReadonlyArray<{
    imageUrl: string;
    type: string;
    price: HTMLTemplateResult;
    from: HTMLTemplateResult;
    to: HTMLTemplateResult;
    date: string;
    time: string;
    action: HTMLTemplateResult;
}>;

const emptyEntries = [] as ReadonlyArray<{
    imageUrl: string;
    type: string;
    price: HTMLTemplateResult;
    from: HTMLTemplateResult;
    to: HTMLTemplateResult;
    date: string;
    time: string;
    action: HTMLTemplateResult;
}>;
// cspell:enable

const exampleListTableInputs = createListTableTable({
    entries: entries,
    columns: [
        {key: 'image', title: '', mobile: {sticky: true}},
        {key: 'price', title: 'PRICE', mobile: {sticky: true}},
        {key: 'from', title: 'FROM'},
        {key: 'to', title: 'TO'},
        {key: 'date', title: 'DATE'},
        {key: 'time', title: 'TIME'},
        {key: 'action', title: ''},
    ],
    createRowObject: (entry) => {
        return {
            cells: {
                image: html`
                    <img
                        style=${css`
                            width: 24px;
                            height: auto;
                        `}
                        src=${entry.imageUrl}
                    />
                `,
                price: entry.price,
                from: entry.from,
                to: entry.to,
                date: entry.date,
                time: entry.time,
                action: entry.action,
            },
            rowActions: {
                click() {
                    alert('This could be useful on opening specific inscription or transaction');
                },
            },
        };
    },
});

const exampleActivityListTableInputs = createListTableTable({
    entries: activityEntries,
    columns: [
        {key: 'image', title: '', mobile: {sticky: true}},
        {key: 'type', title: 'TYPE', mobile: {sticky: true}},
        {key: 'price', title: 'PRICE'},
        {key: 'from', title: 'FROM'},
        {key: 'to', title: 'TO'},
        {key: 'date', title: 'DATE'},
        {key: 'time', title: 'TIME'},
        {key: 'action', title: ''},
    ],
    createRowObject: (entry) => {
        return {
            cells: {
                image: html`
                    <img
                        style=${css`
                            width: 24px;
                            height: auto;
                        `}
                        src=${entry.imageUrl}
                    />
                `,
                type: entry.type,
                price: entry.price,
                from: entry.from,
                to: entry.to,
                date: entry.date,
                time: entry.time,
                action: entry.action,
            },
            rowActions: {
                click() {
                    alert('This could be useful on opening specific inscription or transaction');
                },
            },
        };
    },
});

const exampleEmptyListTableInputs = createListTableTable({
    entries: emptyEntries,
    columns: [
        {key: 'image', title: '', mobile: {sticky: true}},
        {key: 'type', title: 'TYPE', mobile: {sticky: true}},
        {key: 'price', title: 'PRICE'},
        {key: 'from', title: 'FROM'},
        {key: 'to', title: 'TO'},
        {key: 'date', title: 'DATE'},
        {key: 'time', title: 'TIME'},
        {key: 'action', title: ''},
    ],
    createRowObject: (entry) => {
        return {
            cells: {
                image: html`
                    <img
                        style=${css`
                            width: 24px;
                            height: auto;
                        `}
                        src=${entry.imageUrl}
                    />
                `,
                type: entry.type,
                price: entry.price,
                from: entry.from,
                to: entry.to,
                date: entry.date,
                time: entry.time,
                action: entry.action,
            },
            rowActions: {
                click() {
                    alert('This could be useful on opening specific inscription or transaction');
                },
            },
        };
    },
});

const examples: ReadonlyArray<
    Readonly<{
        title: string;
        styles?: CSSResult | undefined;
        inputs?: undefined | Omit<Readonly<ListTableInputs>, 'rows' | 'columns'>;
    }>
> = [
    {
        title: 'basic',
    },
    {
        title: 'with pagination',
        inputs: {
            pagination: {
                currentPage: 1,
                pageCount: 10,
            },
        },
    },
    {
        title: 'squished horizontally',
        styles: css`
            :host {
                width: 200px;
            }
        `,
    },
    {
        title: 'squished vertically',
        styles: css`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,
        inputs: {
            pagination: {
                currentPage: 3,
                pageCount: 10,
            },
        },
    },
    {
        title: 'squished in both',
        styles: css`
            :host {
                max-height: 300px;
                width: 200px;
                display: flex;
            }
        `,
    },
    {
        title: 'with wide parent',
        styles: css`
            ${ToniqListTable} {
                width: 100%;
                flex-grow: 1;
            }
        `,
    },
    {
        title: 'show loading',
        styles: css`
            :host {
                max-height: 500px;
                display: flex;
            }
        `,
        inputs: {
            showLoading: true,
            pagination: {
                currentPage: 3,
                pageCount: 10,
            },
        },
    },
];

const ToniqTestResize = defineToniqElementNoInputs({
    tagName: 'toniq-test-resize',
    stateInitStatic: {
        message: '',
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({updateState, state}) {
        if (!state.cleanup) {
            const intervalId = window.setInterval(() => {
                if (state.message) {
                    updateState({message: ''});
                } else {
                    updateState({message: 'April 3, 2024 (1:57pm)'});
                }
            }, 1000);

            updateState({
                cleanup() {
                    window.clearInterval(intervalId);
                },
            });
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    renderCallback({state}) {
        return state.message;
    },
});

export const toniqListTableElementBookPage = defineBookPage({
    title: ToniqListTable.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'takes time to load',
            stateInitStatic: {
                tableInputs: {
                    ...exampleEmptyListTableInputs,
                    showLoading: true,
                    pagination: {
                        currentPage: 1,
                        pageCount: 5,
                    },
                },
            },
            renderCallback({state, updateState}) {
                setTimeout(() => {
                    updateState({
                        tableInputs: {
                            ...state.tableInputs,
                            ...exampleActivityListTableInputs,
                            showLoading: false,
                        },
                    });
                }, 5000);
                return html`
                    <${ToniqListTable.assign(state.tableInputs)}
                        ${listen(ToniqListTable.events.pageChange, (event) => {
                            updateState({
                                tableInputs: {
                                    ...state.tableInputs,
                                    ...exampleActivityListTableInputs,
                                    pagination: {
                                        currentPage: 2,
                                        pageCount: 5,
                                    },
                                },
                            });
                        })}
                    ></${ToniqListTable}>
                `;
            },
        });

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    ${unsafeCSS(example.styles)}
                `,
                stateInitStatic: {
                    currentPage: example.inputs?.pagination?.currentPage,
                },
                renderCallback({state, updateState}) {
                    const paginationInputs: Pick<
                        (typeof ToniqListTable)['inputsType'],
                        'pagination'
                    > =
                        example.inputs?.pagination && state.currentPage
                            ? {
                                  pagination: {
                                      ...example.inputs.pagination,
                                      currentPage: state.currentPage,
                                  },
                              }
                            : {};

                    return html`
                        <${ToniqListTable.assign({
                            ...exampleListTableInputs,
                            ...example.inputs,
                            ...paginationInputs,
                        })}
                            ${listen(ToniqListTable.events.pageChange, (event) => {
                                updateState({currentPage: event.detail});
                            })}
                        ></${ToniqListTable}>
                    `;
                },
            });
        });

        defineExample({
            title: 'changing child size',
            styles: css`
                :host {
                    width: 600px;
                }
            `,
            stateInitStatic: {
                tableInputs: {
                    ...exampleListTableInputs,
                    rows: exampleListTableInputs.rows.map((row) => {
                        return {
                            ...row,
                            cells: {
                                ...row.cells,
                                date: html`
                                    <${ToniqTestResize}></${ToniqTestResize}>
                                `,
                            },
                        };
                    }),
                },
            },
            renderCallback({state}) {
                return html`
                    <${ToniqListTable.assign(state.tableInputs)}></${ToniqListTable}>
                `;
            },
        });
    },
});
