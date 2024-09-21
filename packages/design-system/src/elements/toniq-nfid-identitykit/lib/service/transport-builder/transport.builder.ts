import {Transport} from '@slide-computer/signer';
import {TransportType} from '../../types';
import {getAuthClientTransportBuilder} from './auth-client-transport.builder';
import {getExtensionTransportBuilder} from './extension-transport.builder';
import {getPopupTransportBuilder} from './new-tab-transport.builder';
import {getStoicTransportBuilder} from './stoic-transport.builder';

export interface TransportBuilderRequest {
    id?: string;
    transportType: TransportType;
    url: string;
    crypto?: Pick<Crypto, 'getRandomValues' | 'randomUUID'> | undefined;
}

export class TransportBuilder {
    private static builders: Record<
        TransportType,
        (request: TransportBuilderRequest) => Promise<Transport>
    > = {
        [TransportType.NEW_TAB]: getPopupTransportBuilder,
        [TransportType.EXTENSION]: getExtensionTransportBuilder,
        [TransportType.INTERNET_IDENTITY]: getAuthClientTransportBuilder,
        [TransportType.STOIC]: getStoicTransportBuilder,
    };

    public static async build(request: TransportBuilderRequest): Promise<Transport> {
        return await TransportBuilder.builders[request.transportType](request);
    }
}
