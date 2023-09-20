import {BookPage, defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {allIconsByCategory} from '..';
import {ToniqIconBookHelper, iconControls, iconCssVarsToStyles} from './icon.book-helper';

export const iconsBookPage = defineBookPage({
    title: 'Icons',
    parent: undefined,
    controls: iconControls,
});

export const iconPages: BookPage[] = Object.entries(allIconsByCategory).map(
    ([
        iconCategoryName,
        icons,
    ]): BookPage => {
        return defineBookPage({
            title: iconCategoryName,
            parent: iconsBookPage,
            elementExamplesCallback({defineExample}) {
                icons.map((icon) => {
                    return defineExample({
                        title: icon.name,
                        renderCallback({controls}) {
                            return html`
                                <${ToniqIconBookHelper.assign({
                                    icon,
                                })}
                                    style=${iconCssVarsToStyles(controls)}
                                ></${ToniqIconBookHelper}>
                            `;
                        },
                    });
                });
            },
        });
    },
);
