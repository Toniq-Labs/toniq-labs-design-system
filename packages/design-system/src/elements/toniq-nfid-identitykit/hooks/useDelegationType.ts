import {ContextConsumer} from '@lit/context';
import {IdentityKitDelegationSignerClient} from '@nfid/identitykit';
import {DeclarativeElementHost} from 'element-vir';
import {IdentityKitContext} from '../context';

type DelegationType = string;
type IdentityKitAuthType = 'DELEGATION' | string;

interface DelegationSignerClient {
    getDelegationType: () => Promise<DelegationType>;
}

interface IdentityKitContext {
    signerClient: DelegationSignerClient | any;
    authType: IdentityKitAuthType;
    user: any;
}

export function useDelegationType(host: DeclarativeElementHost) {
    let delegationType: DelegationType | undefined = undefined;
    const context = new ContextConsumer(host, {
        context: IdentityKitContext,
    });
    const {signerClient, authType, user} = context.value || {};

    if (user) {
        if (
            authType === 'DELEGATION' &&
            signerClient instanceof IdentityKitDelegationSignerClient
        ) {
            signerClient.getDelegationType().then((type) => {
                delegationType = type;
            });
        }
    }

    return {delegationType};
}
