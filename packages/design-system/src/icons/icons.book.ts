import {ElementBookPage, defineElementBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {ToniqIcon, allIconsByCategory} from '..';
import {iconsBookChapter} from '../element-book/book-chapters/icons.book';

export const iconPages: ElementBookPage[] = Object.entries(allIconsByCategory).map(
    ([
        iconCategoryName,
        icons,
    ]): ElementBookPage => {
        return defineElementBookPage({
            title: iconCategoryName,
            parent: iconsBookChapter,
            defineExamplesCallback({defineExample}) {
                icons.map((icon) => {
                    return defineExample({
                        title: icon.iconName,
                        renderCallback() {
                            return html`
                                <${ToniqIcon} ${assign(ToniqIcon, {icon})}></${ToniqIcon}>
                            `;
                        },
                    });
                });
            },
        });
    },
);
