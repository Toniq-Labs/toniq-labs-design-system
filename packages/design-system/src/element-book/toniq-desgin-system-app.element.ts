import {ElementBookApp} from 'element-book';
import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {toniqFontStyles} from '../styles';
import {allElementBookEntries} from './all-element-book-entries';

export const ToniqDesignSystemApp = defineElementNoInputs({
    tagName: 'toniq-design-system-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ElementBookApp} {
            height: 100%;
            width: 100%;
            ${toniqFontStyles.toniqFont};
        }
    `,
    renderCallback() {
        return html`
            <${ElementBookApp}
                ${assign(ElementBookApp, {
                    baseUrl: 'toniq-labs-design-system',
                    entries: allElementBookEntries,
                    themeColor: '#00D093',
                    everythingTitle: 'Design System',
                })}
            ></${ElementBookApp}>
        `;
    },
});
