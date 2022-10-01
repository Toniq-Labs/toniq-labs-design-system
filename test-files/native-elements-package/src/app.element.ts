import {Copy16Icon, ToniqIcon} from '@toniq-labs/design-system';
import {assign, defineElementNoInputs, html} from 'element-vir';

export const AppElement = defineElementNoInputs({
    tagName: 'toniq-native-elements-app',
    renderCallback: () => {
        return html`
            Hello there
            <${ToniqIcon}
                ${assign(ToniqIcon, {icon: Copy16Icon})}
            ></${ToniqIcon}>
        `;
    },
});
