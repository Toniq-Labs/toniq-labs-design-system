import {ContextConsumer} from '@lit/context';
import {
    IdentityKitAccountsSignerClient,
    IdentityKitAuthType,
    IdentityKitDelegationSignerClient,
} from '@nfid/identitykit';
import {DeclarativeElementHost} from 'element-vir';
import {IdentityKitContext} from '../context';

export function useIdentity(host: DeclarativeElementHost) {
    const context = new ContextConsumer(host, {
        context: IdentityKitContext,
    });

    const {signerClient, authType} = context.value || {};

    return {
        identity:
            authType === IdentityKitAuthType.ACCOUNTS ||
            signerClient instanceof IdentityKitAccountsSignerClient
                ? undefined
                : (signerClient as IdentityKitDelegationSignerClient)?.getIdentity(),
    };
}
