import {type Identity} from '@dfinity/agent';
import {PartialIdentity} from '@dfinity/identity';
import {SubAccount} from '@dfinity/ledger-icp';
import {Principal} from '@dfinity/principal';
import {ContextConsumer, createContext} from '@lit/context';
import {IdentityKitAuthType, IdentityKitDelegationType} from '@nfid/identitykit';
import {Signer} from '@slide-computer/signer';
import {SignerAgent} from '@slide-computer/signer-agent';
import {DeclarativeElementHost} from 'element-vir';
import {IdentityKitTheme} from './constants';
import {useAccounts, useDelegationType, useIdentity} from './hooks';
import {IdentityKitProvider} from './types';

const defaultState: IdentityKitProvider = {
    signers: [],
    selectedSigner: undefined,
    toggleModal: () => {
        throw new Error('toggleModal not implemented');
    },
    onSelectSigner: () => {
        throw new Error('selectSigner not implemented');
    },
    selectCustomSigner: () => {
        throw new Error('signer is not available on this url');
    },
    theme: IdentityKitTheme.SYSTEM,
    disconnect: () => {
        throw new Error('disconnect not implemented');
    },
    connect: () => {
        throw new Error('connect not implemented');
    },
    agent: null,
    authType: IdentityKitAuthType.ACCOUNTS,
};

export const IdentityKitContext = createContext<IdentityKitProvider>(defaultState);

export function useIdentityKit(host: DeclarativeElementHost): {
    signer?: Signer | undefined;
    agent: SignerAgent<Signer> | null | undefined;
    user?:
        | {
              principal: Principal;
              subaccount?: SubAccount;
          }
        | undefined;
    icpBalance?: number | undefined;
    authType: IdentityKitAuthType;
    delegationType?: IdentityKitDelegationType | undefined;
    accounts?:
        | {
              principal: Principal;
              subAccount?: SubAccount;
          }[]
        | undefined;
    identity?: Identity | PartialIdentity | undefined;
    connect: (() => void) | undefined;
    disconnect: (() => Promise<void>) | undefined;
    fetchIcpBalance?: (() => Promise<void>) | undefined;
} {
    const identityKitContext = new ContextConsumer(host, {
        context: IdentityKitContext,
    });

    const {
        selectedSigner,
        agent,
        user,
        icpBalance,
        authType,
        connect,
        disconnect,
        fetchIcpBalance,
    } = identityKitContext.value || {};

    const {identity} = useIdentity(host);
    const {delegationType} = useDelegationType(host);
    const {accounts} = useAccounts(host);

    return {
        signer: selectedSigner,
        agent,
        user,
        icpBalance,
        authType: authType!,
        accounts,
        delegationType,
        identity,
        connect,
        disconnect,
        fetchIcpBalance,
    };
}
