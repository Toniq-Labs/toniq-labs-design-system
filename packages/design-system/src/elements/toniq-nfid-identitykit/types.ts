import {
    IdentityKitAccountsSignerClient,
    IdentityKitDelegationSignerClient,
    IdentityKitSignerAgentOptions,
    IdentityKitSignerConfig,
} from '@nfid/identitykit';
import {Signer} from '@slide-computer/signer';
import {IdentityKitTheme} from './constants';

export interface IdentityKitProvider {
    signers: IdentityKitSignerConfig[];
    featuredSigner?: IdentityKitSignerConfig | undefined;
    selectedSigner?: Signer | undefined;
    savedSigner?: Signer | undefined;
    isModalOpen: boolean;
    toggleModal: () => void;
    selectSigner: (signerId?: string) => IdentityKitSignerConfig | void;
    selectCustomSigner: (url: string) => void;
    theme: IdentityKitTheme;
    agentOptions?:
        | {
              signer?: IdentityKitSignerAgentOptions['signer'];
              agent?: IdentityKitSignerAgentOptions['agent'];
          }
        | undefined;
    signerClient?: IdentityKitDelegationSignerClient | IdentityKitAccountsSignerClient | undefined;
    setSignerClient: (
        sc?: IdentityKitDelegationSignerClient | IdentityKitAccountsSignerClient,
    ) => void;
    shouldLogoutByIdle?: boolean;
}
