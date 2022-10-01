import {Copy16Icon} from '@toniq-labs/design-system';
import {ToniqButton, ToniqIcon} from '@toniq-labs/design-system/dist/esm/elements/react-components';

export default function App() {
    return (
        <div className="App">
            {ToniqButton.tagName}
            <ToniqIcon icon={Copy16Icon} />
        </div>
    );
}
