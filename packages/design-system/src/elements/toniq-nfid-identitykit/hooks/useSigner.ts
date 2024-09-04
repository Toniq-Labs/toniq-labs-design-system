import {TransportBuilder} from '@nfid/identitykit/dist/src/lib/service';
import {SignerConfig, TransportType} from '@nfid/identitykit/dist/src/lib/types';
import {Signer} from '@slide-computer/signer';

type UseSignerOptions = {
    signers: SignerConfig[];
    closeModal: () => unknown;
};

type UseSignerReturn = {
    selectSigner: (signerId?: string) => Signer | undefined;
    selectCustomSigner: (url: string) => void;
    selectedSigner: Signer | undefined;
    savedSigner: Signer | undefined;
};

export function createSignerManager({signers, closeModal}: UseSignerOptions): UseSignerReturn {
    let selectedSigner: Signer | undefined = undefined;
    let prevSigner: Signer | undefined = undefined;

    const selectSigner = (
        cb: (signer: Signer) => unknown,
        signerId?: string,
    ): Signer | undefined => {
        if (!signerId) {
            localStorage.removeItem('signerId');
            selectedSigner = undefined;
            return undefined;
        }

        const signer = signers.find((s) => s.id === signerId);
        if (!signer) throw new Error(`Signer with id ${signerId} not found`);

        const {transportType, providerUrl} = signer;

        const transport = TransportBuilder.build({
            transportType,
            url: providerUrl,
        });

        const createdSigner = new Signer({transport});
        cb(createdSigner);

        localStorage.setItem('signerId', signerId);
        closeModal();

        return createdSigner;
    };

    const selectCustomSigner = (url: string) => {
        const transport = TransportBuilder.build({
            transportType: TransportType.NEW_TAB,
            url,
        });

        const createdSigner = new Signer({transport});

        selectedSigner = createdSigner;
        closeModal();
    };

    // default selected signer from local storage
    if (!selectedSigner && localStorage.getItem('signerId') && !prevSigner) {
        selectSigner((signer) => {
            prevSigner = signer;
        }, localStorage.getItem('signerId')!);
    }

    return {
        selectSigner: (signerId?: string) =>
            selectSigner((signer) => {
                selectedSigner = signer;
            }, signerId),
        selectCustomSigner,
        selectedSigner,
        savedSigner: prevSigner,
    };
}
