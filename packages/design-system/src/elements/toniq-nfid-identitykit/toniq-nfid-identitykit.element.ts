import {HttpAgent} from '@dfinity/agent';
import {SubAccount} from '@dfinity/ledger-icp';
import {Principal} from '@dfinity/principal';
import {ContextProvider} from '@lit/context';
import {
    IdentityKit,
    IdentityKitAccountsSignerClientOptions,
    IdentityKitAuthType,
    IdentityKitDelegationSignerClientOptions,
    IdentityKitSignerAgentOptions,
    IdentityKitSignerConfig,
    NFIDW,
    Stoic,
} from '@nfid/identitykit';
import {Signer, Transport} from '@slide-computer/signer';
import {SignerAgent} from '@slide-computer/signer-agent';
import {css, defineElement, guard, html} from 'element-vir';
import {ToniqNfidIdentitykitModal} from './components/toniq-nfid-identitykit-modal.element';
import {IdentityKitTheme} from './constants';
import {IdentityKitContext} from './context';
import {TransportBuilder} from './lib/service';
import {TransportType} from './lib/types';

const DEFAULT_IDLE_TIMEOUT = 14_400_000;

export const ToniqNfidIdentityKit = defineElement<{
    test: string;
}>()({
    tagName: 'toniq-nfid-identity-kit',
    styles: css`
        :host {
            display: flex;
        }
    `,
    stateInitStatic: {
        selectedSigner: undefined as Signer | undefined,
        prevSigner: undefined as Signer | undefined,
        ik: null as IdentityKit | null,
        user: undefined as {principal: Principal; subaccount?: SubAccount} | undefined,
        icpBalance: undefined as number | undefined,
        agent: null as SignerAgent<Signer> | null,
    },
    renderCallback({host, state, updateState}) {
        const nfidw: IdentityKitSignerConfig = {...NFIDW, providerUrl: 'https://nfid.one/rpc'};
        const signers = [
            nfidw,
            Stoic,
        ];

        const options = {crypto: globalThis.crypto};

        function closeModal() {
            console.log('closeModal');
        }

        const innerSelectSigner = async (cb: (signer?: Signer) => unknown, signerId?: string) => {
            if (!signerId) {
                localStorage.removeItem('signerId');
                return cb(undefined);
            }

            const signer = signers.find((s) => s.id === signerId);
            if (!signer) throw new Error(`Signer with id ${signerId} not found`);

            const {transportType, providerUrl} = signer;

            const transport = await TransportBuilder.build({
                id: signer.id,
                transportType,
                url: providerUrl,
                crypto,
            });

            if (!transport.connection?.connected) {
                await transport.connection?.connect();
            }

            const createdSigner = new Signer({
                ...options,
                transport,
            });

            cb(createdSigner);

            localStorage.setItem('signerId', signerId);
            closeModal();

            return signer;
        };

        const selectSigner = async (signerId?: string) => {
            await innerSelectSigner(
                (signer) =>
                    updateState({
                        selectedSigner: signer,
                    }),
                signerId,
            );
        };

        const selectCustomSigner = async (url: string) => {
            const transport = await TransportBuilder.build({
                transportType: TransportType.NEW_TAB,
                url,
                crypto,
            });

            const createdSigner = new Signer({...options, transport});

            updateState({
                selectedSigner: createdSigner,
            });
            closeModal();
        };

        const clearSigner = async () => {
            await innerSelectSigner((signer) =>
                updateState({
                    selectedSigner: signer,
                }),
            );
            await innerSelectSigner((signer) =>
                updateState({
                    prevSigner: signer,
                }),
            );
        };

        function useCreateIdentityKit<
            T extends IdentityKitAuthType = typeof IdentityKitAuthType.ACCOUNTS,
        >({
            clearSigner,
            signerClientOptions = {},
            authType,
            agentOptions,
            onConnectFailure,
            onConnectSuccess,
            onDisconnect,
            realConnectDisabled,
        }: {
            clearSigner: () => Promise<unknown>;
            authType: T;
            signerClientOptions?: T extends typeof IdentityKitAuthType.DELEGATION
                ? Omit<IdentityKitDelegationSignerClientOptions, 'signer'>
                : Omit<IdentityKitAccountsSignerClientOptions, 'signer'>;
            agentOptions?: {
                agent?: IdentityKitSignerAgentOptions<Signer>['agent'];
            };
            onConnectFailure?: (e: Error) => unknown;
            onConnectSuccess?: () => unknown;
            onDisconnect?: () => unknown;
            realConnectDisabled?: boolean;
        }) {
            const disconnect = async () => {
                const finalFunc = async () => {
                    await state.selectedSigner?.transport.connection?.disconnect();
                    await clearSigner();
                    updateState({
                        user: undefined,
                        icpBalance: undefined,
                        agent: null,
                    });
                    onDisconnect?.();
                };
                if (state.ik?.signerClient) {
                    await state.ik.signerClient.logout();
                    await finalFunc();
                } else {
                    await finalFunc();
                }
            };

            const fetchIcpBalance = async () => {
                if (state.ik) {
                    console.log(await state.ik.getIcpBalance());
                    updateState({
                        icpBalance: await state.ik.getIcpBalance(),
                    });
                }
            };

            const createIdentityKit = async () => {
                updateState({
                    ik: null,
                });
                if (state.selectedSigner && !state.ik?.signerClient) {
                    IdentityKit.create<T>({
                        authType,
                        signerClientOptions: {
                            ...signerClientOptions,
                            crypto,
                            signer: state.selectedSigner,
                            idleOptions: {
                                idleTimeout: DEFAULT_IDLE_TIMEOUT,
                                ...signerClientOptions.idleOptions,
                                onIdle: async () => {
                                    signerClientOptions.idleOptions?.onIdle?.();
                                    await disconnect();
                                },
                            },
                        },
                    }).then(async (instance) => {
                        if (!realConnectDisabled) {
                            if (!instance.signerClient.connectedUser) {
                                try {
                                    await instance.signerClient.login();
                                    updateState({
                                        user: instance.signerClient.connectedUser,
                                    });
                                    onConnectSuccess?.();
                                    console.log(instance.signerClient.connectedUser);

                                    if (state.icpBalance === undefined && state.user) {
                                        await fetchIcpBalance();
                                    }
                                    if (state.ik && state.user) {
                                        await createSignerAgent();
                                    }
                                } catch (e) {
                                    await clearSigner();
                                    onConnectFailure?.(e as Error);
                                }
                            } else {
                                updateState({
                                    user: instance.signerClient.connectedUser,
                                });
                            }
                        }
                        updateState({
                            ik: instance as IdentityKit,
                        });
                    });
                }
            };

            const createSignerAgent = async (agent?: HttpAgent) => {
                if (state.ik && state.user) {
                    state.ik
                        .createSignerAgent({
                            ...agentOptions,
                            signer: state.selectedSigner!,
                            account: state.user.principal,
                            agent: agent!,
                        })
                        .then((agent: SignerAgent<Signer<Transport>>) => {
                            updateState({
                                agent,
                            });
                        });
                    if (!agentOptions?.agent) {
                        HttpAgent.create({host: 'https://icp-api.io/'}).then(createSignerAgent);
                    } else {
                        createSignerAgent(agentOptions?.agent);
                    }
                }
            };

            (async () => {
                await createIdentityKit();
                if (state.icpBalance === undefined && state.user) {
                    await fetchIcpBalance();
                }
                if (state.ik && state.user) {
                    await createSignerAgent();
                }
            })();

            return {
                agent: state.agent,
                user: state.user,
                disconnect,
                icpBalance: state.icpBalance,
                signerClient: state.ik?.signerClient,
                fetchIcpBalance: state.user ? fetchIcpBalance : undefined,
            };
        }

        const contextProvider = new ContextProvider(host, {
            context: IdentityKitContext,
        });

        const signerClientOptions = {
            targets: ['2wdkf-viaaa-aaaam-ackqq-cai'],
        };

        return html`
            ${guard([state.selectedSigner], () => {
                const identityKit = useCreateIdentityKit({
                    clearSigner,
                    signerClientOptions: {...signerClientOptions, crypto},
                    authType: IdentityKitAuthType.ACCOUNTS,
                    onConnectSuccess: () => {
                        console.log('onConnectSuccess');
                        console.log(contextProvider.value);
                    },
                    onConnectFailure: (e) => {
                        console.log('onConnectFailure', e.message);
                    },
                    onDisconnect: () => {},
                    realConnectDisabled: false,
                });

                contextProvider.setValue({
                    signers,
                    featuredSigner: nfidw,
                    selectedSigner: state.selectedSigner,
                    isModalOpen: true,
                    toggleModal: () => {},
                    selectSigner,
                    selectCustomSigner,
                    theme: IdentityKitTheme.SYSTEM,
                    agent: identityKit.agent,
                    user: identityKit.user,
                    icpBalance: identityKit.icpBalance,
                    authType: IdentityKitAuthType.ACCOUNTS,
                    signerClient: identityKit.signerClient,
                    connect: () => {},
                    disconnect: identityKit.disconnect,
                    fetchIcpBalance: identityKit.fetchIcpBalance,
                });

                return html`
                    <${ToniqNfidIdentitykitModal.assign({
                        onSelectSigner: selectSigner,
                    })}></${ToniqNfidIdentitykitModal}>
                `;
            })}
        `;
    },
});
