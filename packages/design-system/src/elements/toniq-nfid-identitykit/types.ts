import {SubAccount} from '@dfinity/ledger-icp';
import {Principal} from '@dfinity/principal';
import {
    IdentityKitAuthType,
    IdentityKitSignerAgent,
    IdentityKitSignerClient,
} from '@nfid/identitykit';
import {SignerConfig} from '@nfid/identitykit/dist/src/lib/types';
import {Signer} from '@slide-computer/signer';
import {IdentityKitTheme} from './constants';

export interface IdentityKitProvider {
    signers: SignerConfig[];
    featuredSigner?: SignerConfig | undefined;
    selectedSigner?: Signer | undefined;
    isModalOpen: boolean;
    theme: IdentityKitTheme;
    agent: IdentityKitSignerAgent<Signer> | null;
    user?:
        | {
              principal: Principal;
              subAccount?: SubAccount;
          }
        | undefined;
    icpBalance?: number | undefined;
    authType: IdentityKitAuthType;
    signerClient?: IdentityKitSignerClient | undefined;
    toggleModal: () => void;
    selectSigner: (signerId?: string) => Promise<SignerConfig | void>;
    selectCustomSigner: (url: string) => Promise<void>;
    connect: () => void;
    disconnect: () => Promise<void>;
    fetchIcpBalance?: (() => Promise<void>) | undefined;
}
