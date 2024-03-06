import {ToniqIcon} from '@toniq-labs/design-system/src/elements/toniq-icon/toniq-icon.element';
import {Copy16Icon} from '@toniq-labs/design-system/src/icons';
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
