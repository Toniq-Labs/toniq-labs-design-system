import {BookPage, defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {allIconsByCategory} from '..';
import {iconsBookPage} from '../element-book/book-pages/icons.book';
import {ToniqIconBookHelper} from './icon.book-helper';

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
                        renderCallback() {
                            return html`
                                <${ToniqIconBookHelper.assign({
                                    icon,
                                })}></${ToniqIconBookHelper}>
                            `;
                        },
                    });
                });
            },
        });
    },
);
