import {Copy16Icon, ToniqIcon} from '@toniq-labs/design-system';
import {defineElementNoInputs, html} from 'element-vir';

export const AppElement = defineElementNoInputs({
    tagName: 'toniq-native-elements-app',
    renderCallback() {
        return html`
            Hello there
            <${ToniqIcon.assign({icon: Copy16Icon})}></${ToniqIcon}>
        `;
    },
});
