import {IdentityKitSignerAgentOptions} from '@nfid/identitykit';
import {
    AccountsSignerClient,
    DelegationSignerClient,
} from '@nfid/identitykit/dist/src/lib/signer-client';
import {SignerConfig} from '@nfid/identitykit/dist/src/lib/types';
import {Signer} from '@slide-computer/signer';
import {IdentityKitTheme} from './constants';

export interface IdentityKitProvider {
    signers: SignerConfig[];
    featuredSigner?: SignerConfig;
    selectedSigner?: Signer | undefined;
    savedSigner?: Signer | undefined;
    isModalOpen: boolean;
    toggleModal: () => void;
    selectSigner: (signerId?: string) => SignerConfig | void;
    selectCustomSigner: (url: string) => void;
    theme: IdentityKitTheme;
    agentOptions?:
        | {
              signer?: IdentityKitSignerAgentOptions['signer'];
              agent?: IdentityKitSignerAgentOptions['agent'];
          }
        | undefined;
    signerClient?: DelegationSignerClient | AccountsSignerClient | undefined;
    setSignerClient: (sc?: DelegationSignerClient | AccountsSignerClient) => void;
    shouldLogoutByIdle?: boolean;
}
