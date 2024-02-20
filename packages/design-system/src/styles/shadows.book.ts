import {getObjectTypedEntries} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {stylesBookPage} from '../element-book/book-pages/styles.book';
import {toniqShadows} from './shadows';

export const toniqShadowsBookPage = defineBookPage({
    title: 'Shadows',
    parent: stylesBookPage,
    elementExamplesCallback({defineExample}) {
        getObjectTypedEntries(toniqShadows).forEach(
            ([
                shadowName,
                shadowStyles,
            ]) => {
                defineExample({
                    title: shadowName,
                    styles: css`
                        div {
                            width: 50px;
                            height: 50px;
                            border-radius: 8px;
                            background-color: white;
                            margin: 16px;
                            ${shadowStyles};
                        }
                    `,
                    renderCallback() {
                        return html`
                            <div></div>
                        `;
                    },
                });
            },
        );
    },
});
