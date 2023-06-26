import {defineBookPage} from 'element-book';
import {assign, html} from 'element-vir';
import {dataBookPage} from '../element-book/book-pages/data.book';
import {ToniqSvg} from '../icons';
import {ToniqIconBookHelper} from '../icons/icon.book-helper';
import {socialUrlIcons} from './social-urls';

export const socialUrlsBookPage = defineBookPage({
    title: 'Social Urls',
    parent: dataBookPage,
    elementExamplesCallback({defineExample}) {
        function defineSocialIconExample({socialName, icon}: {socialName: string; icon: ToniqSvg}) {
            defineExample({
                title: socialName,
                renderCallback() {
                    return html`
                        <${ToniqIconBookHelper}
                            ${assign(ToniqIconBookHelper, {icon})}
                        ></${ToniqIconBookHelper}>
                    `;
                },
            });
        }

        Object.entries(socialUrlIcons).forEach(
            ([
                socialName,
                icon,
            ]) => {
                defineSocialIconExample({socialName, icon});
            },
        );
    },
});
