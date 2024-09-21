import {SubAccount} from '@dfinity/ledger-icp';
import {Principal} from '@dfinity/principal';
import {ContextConsumer} from '@lit/context';
import {IdentityKitAuthType} from '@nfid/identitykit';
import {DeclarativeElementHost} from 'element-vir';
import {IdentityKitContext} from '../context';
import {AccountsSignerClient} from '../lib/signer-client';

export function useAccounts(host: DeclarativeElementHost) {
    const context = new ContextConsumer(host, {
        context: IdentityKitContext,
    });
    const {authType, signerClient, user} = context.value || {};
    let accounts:
        | {
              principal: Principal;
              subAccount?: SubAccount;
          }[]
        | undefined = undefined;

    if (!user) {
        accounts = undefined;
    } else {
        if (
            authType === IdentityKitAuthType.ACCOUNTS &&
            !accounts &&
            signerClient instanceof AccountsSignerClient
        ) {
            (signerClient as AccountsSignerClient)
                .getAccounts()
                .then((fetchedAccounts) => {
                    accounts = fetchedAccounts;
                })
                .catch(() => {
                    accounts = undefined;
                });
        }
    }

    return {accounts};
}
