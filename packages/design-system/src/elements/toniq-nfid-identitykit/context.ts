import {ContextConsumer, createContext} from '@lit/context';
import {
    IdentityKit,
    IdentityKitAccountsSignerClient,
    IdentityKitDelegationSignerClient,
    IdentityKitSignerAgent,
    IdentityKitSignerAgentOptions,
    IdentityKitSignerConfig,
} from '@nfid/identitykit';
import {Signer} from '@slide-computer/signer';
import {DeclarativeElementHost} from 'element-vir';
import {IdentityKitTheme} from './constants';
import {IdentityKitProvider} from './types';

const defaultState: IdentityKitProvider = {
    signers: [],
    selectedSigner: undefined,
    savedSigner: undefined,
    isModalOpen: false,
    toggleModal: () => {
        throw new Error('toggleModal not implemented');
    },
    selectSigner: () => {
        throw new Error('selectSigner not implemented');
    },
    selectCustomSigner: () => {
        throw new Error('signer is not available on this url');
    },
    theme: IdentityKitTheme.SYSTEM,
    agentOptions: {} as {
        signer?: IdentityKitSignerAgentOptions['signer'];
        agent?: IdentityKitSignerAgentOptions['agent'];
    },
    setSignerClient: () => {
        throw new Error('setSignerClient not implemented');
    },
};

export const IdentityKitContext = createContext<IdentityKitProvider>(defaultState);

export function useIdentityKit(host: DeclarativeElementHost): {
    selectedSigner?: Signer | undefined;
    savedSigner?: Signer | undefined;
    selectSigner: (signerId?: string | undefined) => void | IdentityKitSignerConfig;
    signerClient?: IdentityKitDelegationSignerClient | IdentityKitAccountsSignerClient | undefined;
    agent: IdentityKitSignerAgent;
} {
    const identityKitContext = new ContextConsumer(host, {
        context: IdentityKitContext,
        subscribe: true,
    });

    const {
        selectedSigner,
        savedSigner,
        selectSigner = () => {},
        signerClient,
    } = identityKitContext.value || {};

    return {
        selectedSigner,
        savedSigner,
        selectSigner,
        signerClient,
        agent: IdentityKit.signerAgent,
    };
}
