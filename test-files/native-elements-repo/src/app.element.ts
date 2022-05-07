import {Copy16Icon, ToniqIcon} from '@toniq-labs/design-system';
import {assign, defineFunctionalElement, html} from 'element-vir';

export const AppElement = defineFunctionalElement({
    tagName: 'toniq-native-elements-app',
    renderCallback: () => {
        return html`
            Hello there
            <${ToniqIcon}
                ${assign(ToniqIcon.props.icon, Copy16Icon)}
            ></${ToniqIcon}>
        `;
    },
});
