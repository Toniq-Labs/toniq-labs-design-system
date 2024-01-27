import {ElementBookApp, ElementBookSlotName} from 'element-book';
import {css, defineElementNoInputs, html} from 'element-vir';
import {toniqFontStyles} from '..';
import {allElementBookEntries} from './all-element-book-entries';
import {createElementBookUrl} from './book-helpers/create-element-book-url';

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
            ${toniqFontStyles.paragraphFont};
        }

        .nav-header {
            padding-left: 16px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
        }

        img {
            width: 180px;
        }

        h1,
        p {
            margin: 0;
        }
    `,
    renderCallback() {
        return html`
            <${ElementBookApp.assign({
                internalRouterConfig: {
                    basePath: 'toniq-labs-design-system',
                    useInternalRouter: true,
                },
                entries: allElementBookEntries,
                themeColor: '#00D093',
            })}>
                <div class="nav-header" slot=${ElementBookSlotName.NavHeader}>
                    <img src=${createElementBookUrl('/logo.png')} />
                    <p>Design System</p>
                </div>
            </${ElementBookApp}>
        `;
    },
});
