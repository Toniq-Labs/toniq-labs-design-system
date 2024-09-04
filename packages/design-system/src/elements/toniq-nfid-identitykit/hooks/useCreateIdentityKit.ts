import {
    IdentityKit,
    IdentityKitAccountsSignerClient,
    IdentityKitAccountsSignerClientOptions,
    IdentityKitAuthType,
    IdentityKitDelegationSignerClient,
    IdentityKitDelegationSignerClientOptions,
    IdentityKitSignerAgentOptions,
} from '@nfid/identitykit';
import {
    AccountsSignerClient,
    DelegationSignerClient,
} from '@nfid/identitykit/dist/src/lib/signer-client';
import {Signer} from '@slide-computer/signer';

type IdentityKitOptions<T extends IdentityKitAuthType> = {
    selectedSigner?: Signer;
    authType?: T;
    signerClientOptions?: T extends typeof IdentityKitAuthType.DELEGATION
        ? Omit<IdentityKitDelegationSignerClientOptions, 'signer'>
        : Omit<IdentityKitAccountsSignerClientOptions, 'signer'>;
    agentOptions?: {
        signer?: IdentityKitSignerAgentOptions['signer'];
        agent?: IdentityKitSignerAgentOptions['agent'];
    };
};

export async function createIdentityKit<
    T extends IdentityKitAuthType = typeof IdentityKitAuthType.ACCOUNTS,
>({
    selectedSigner,
    authType,
    signerClientOptions = {},
}: IdentityKitOptions<T>): Promise<{
    signerClient: DelegationSignerClient | AccountsSignerClient | undefined;
    setSignerClient: (client: DelegationSignerClient | AccountsSignerClient) => void;
}> {
    let signerClient: DelegationSignerClient | AccountsSignerClient | undefined = undefined;

    const signerClientClass =
        !authType || authType === IdentityKitAuthType.DELEGATION
            ? IdentityKitDelegationSignerClient
            : IdentityKitAccountsSignerClient;

    const createIdentityKitSignerClient = async () => {
        if (selectedSigner) {
            return await signerClientClass.create({
                signer: selectedSigner,
                keyType: 'Ed25519',
                ...signerClientOptions,
            });
        }
        return null;
    };

    if (selectedSigner) {
        const client = await createIdentityKitSignerClient();
        if (client) {
            IdentityKit.create(client);
            //@ts-ignore
            signerClient = client as DelegationSignerClient | AccountsSignerClient;
        }
    }

    const setSignerClient = (client: DelegationSignerClient | AccountsSignerClient) => {
        signerClient = client;
    };

    return {signerClient, setSignerClient};
}
