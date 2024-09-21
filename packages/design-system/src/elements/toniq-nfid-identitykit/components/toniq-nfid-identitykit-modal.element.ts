import {ContextConsumer} from '@lit/context';
import {
    asyncProp,
    classMap,
    css,
    html,
    isResolved,
    listen,
    renderAsync,
    renderIf,
    repeat,
} from 'element-vir';
import {noNativeFormStyles} from 'vira';
import {ArrowLeft24Icon, Info24Icon} from '../../../icons';
import {toniqFontStyles} from '../../../styles';
import {defineToniqElement} from '../../define-toniq-element';
import {ToniqButton, ToniqButtonVariantEnum} from '../../toniq-button/toniq-button.element';
import {ToniqIcon} from '../../toniq-icon/toniq-icon.element';
import {ToniqInput} from '../../toniq-input/toniq-input.element';
import {ToniqLoading, ToniqLoadingSizeEnum} from '../../toniq-loading/toniq-loading.element';
import {IdentityKitContext} from '../context';
import {SignerConfig} from '../lib/types';

export const ToniqNfidIdentitykitModal = defineToniqElement<{
    onSelectSigner: (id: string) => Promise<void | SignerConfig>;
}>()({
    tagName: 'toniq-nfid-identitykit-modal',
    styles: css`
        :host {
            background-color: black;
            border-radius: 0.75rem;
            padding: 20px;
            width: 450px;
            max-width: 450px;
        }

        .modal {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            ${toniqFontStyles.paragraphFont};
        }

        .modal-header ${ToniqIcon} {
            color: white;
            cursor: pointer;
        }

        .modal-header span {
            ${toniqFontStyles.paragraphFont};
            color: white;
        }

        .modal-title {
            display: flex;
            gap: 10px;
        }

        .modal-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .select-wallet-list {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
        }

        .select-wallet-list .wallet-select {
            display: flex;
            gap: 0.75rem;
            background-color: #27272a;
            padding: 1.25rem;
            border-radius: 12px;
            color: white;
            cursor: pointer;
        }

        .select-wallet-list .wallet-select > img {
            height: 2rem;
            width: 2rem;
        }

        .select-wallet-list .wallet-select:hover {
            background-color: #34343a;
        }

        .select-wallet-list .gradient-border {
            background: linear-gradient(135deg, #ed71ff, #899dff 51%, #63ffeb);
            padding: 1px;
            background-clip: border-box;
            border-radius: 12px;
        }

        .select-wallet-list .wallet-select-desc {
            ${toniqFontStyles.labelFont};
            color: gray;
            margin: 0;
            padding: 0;
        }

        .view-all-button {
            ${noNativeFormStyles};
            ${toniqFontStyles.boldParagraphFont};
            color: #14b8a5;
            border-radius: 0.375rem;
            padding: 15px;
            cursor: pointer;
        }

        .view-all-button:hover {
            background-color: #34343a;
        }

        .signer-input-container {
            display: flex;
            flex-direction: column;
            color: white;
        }

        .signer-input-container ${ToniqInput} {
            width: 100%;
        }

        .signer-input-container .signer-input-title {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .signer-input-wrapper {
            display: flex;
            gap: 12px;
        }

        .thumbnail-loading {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        ${ToniqLoading} {
            color: white;
        }
    `,
    stateInitStatic: {
        viewAll: false,
        signerConfigs: asyncProp({
            async updateCallback({signerConfigs}: {signerConfigs: SignerConfig[]}) {
                return signerConfigs;
            },
        }),
    },
    renderCallback({host, inputs, state, updateState}) {
        new ContextConsumer(host, {
            context: IdentityKitContext,
            subscribe: true,
            callback: (data) => {
                if (!isResolved(state.signerConfigs.value)) {
                    state.signerConfigs.update({signerConfigs: data.signers});
                }
            },
        });

        return html`
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-title">
                        <${ToniqIcon.assign({icon: ArrowLeft24Icon})}></${ToniqIcon}>
                        <span>Connect your wallet</span>
                    </div>
                    <${ToniqIcon.assign({icon: Info24Icon})}></${ToniqIcon}>
                </div>
                <div class="modal-content">
                    <div class="select-wallet-list">
                        ${renderAsync(
                            state.signerConfigs,
                            html`
                                <div class="thumbnail-loading">
                                    <${ToniqLoading.assign({
                                        size: ToniqLoadingSizeEnum.Large,
                                    })}></${ToniqLoading}>
                                </div>
                            `,
                            (resolvedSigner) => html`
                                ${repeat(
                                    resolvedSigner,
                                    (wallet) => wallet.label,
                                    (wallet) => {
                                        return html`
                                            <div
                                                class=${classMap({
                                                    'wallet-select-wrapper': true,
                                                    'gradient-border':
                                                        wallet.label === 'NFID Wallet',
                                                })}
                                            >
                                                <div
                                                    class="wallet-select"
                                                    ${listen('click', async () => {
                                                        await inputs.onSelectSigner(wallet.id);
                                                    })}
                                                >
                                                    <img src=${wallet.icon} />
                                                    <div>
                                                        ${wallet.label}
                                                        ${renderIf(
                                                            !!wallet.description,
                                                            html`
                                                                <p class="wallet-select-desc">
                                                                    ${wallet.description}
                                                                </p>
                                                            `,
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    },
                                )}
                            `,
                        )}
                        ${renderIf(
                            state.viewAll,
                            html`
                                <div class="signer-input-container">
                                    <span class="signer-input-title">CustomConnect</span>
                                    <div class="signer-input-wrapper">
                                        <${ToniqInput.assign({
                                            value: '',
                                            placeholder: 'https://wallet.url',
                                        })}></${ToniqInput}>
                                        <${ToniqButton.assign({
                                            text: 'Connect',
                                            variant: ToniqButtonVariantEnum.Secondary,
                                        })}></${ToniqButton}>
                                    </div>
                                </div>
                            `,
                            html`
                                <button
                                    class="view-all-button"
                                    ${listen('click', () => {
                                        updateState({viewAll: !state.viewAll});
                                    })}
                                >
                                    View all
                                </button>
                            `,
                        )}
                    </div>
                </div>
            </div>
        `;
    },
});
