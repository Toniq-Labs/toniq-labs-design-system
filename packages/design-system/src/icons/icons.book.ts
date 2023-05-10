import {ElementBookPage, createExample, defineElementBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {iconsBookChapter} from '../element-book/book-chapters/icons.book';
import {ToniqIcon} from '../elements';
import {allIconsByCategory} from './index';

export const iconPages: ElementBookPage[] = Object.entries(allIconsByCategory).map(
    ([
        iconCategoryName,
        icons,
    ]): ElementBookPage => {
        return defineElementBookPage({
            title: iconCategoryName,
            parent: iconsBookChapter,
            examples: icons.map((icon) => {
                return createExample({
                    title: icon.iconName,
                    render() {
                        return html`
                            <${ToniqIcon} ${assign(ToniqIcon, {icon})}></${ToniqIcon}>
                        `;
                    },
                });
            }),
        });
    },
);
