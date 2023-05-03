import {ElementBookApp} from 'element-book';
import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {toniqButtonBookEntries} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCheckboxBookEntries} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookEntries} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqElementsBookChapter} from './book-chapters/toniq-elements.book';
import {toniqIconsBookChapter} from './book-chapters/toniq-icons.book';
import {toniqStylesBookChapter} from './book-chapters/toniq-styles.book';

const elementBookEntries = [
    toniqElementsBookChapter,
    toniqIconsBookChapter,
    toniqStylesBookChapter,
    ...toniqButtonBookEntries,
    ...toniqCheckboxBookEntries,
    ...toniqChipBookEntries,
];

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
        }
    `,
    renderCallback() {
        return html`
            <${ElementBookApp}
                ${assign(ElementBookApp, {
                    baseRoute: 'toniq-labs-design-system',
                    entries: elementBookEntries,
                    themeColor: '#00D093',
                })}
            ></${ElementBookApp}>
        `;
    },
});
