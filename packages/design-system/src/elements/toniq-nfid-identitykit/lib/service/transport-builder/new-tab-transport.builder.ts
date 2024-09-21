import {Transport} from '@slide-computer/signer';
import {PostMessageTransport} from '@slide-computer/signer-web';
import {TransportBuilderRequest} from './transport.builder';

export async function getPopupTransportBuilder({
    url,
    crypto,
}: TransportBuilderRequest): Promise<Transport> {
    return new PostMessageTransport({
        url,
        crypto: crypto ?? globalThis.crypto,
    });
}
