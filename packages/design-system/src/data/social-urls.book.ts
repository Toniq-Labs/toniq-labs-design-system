import {createExample, defineElementBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {dataBookChapter} from '../element-book/book-chapters/data.book';
import {ToniqIcon} from '../elements';
import {applyBackgroundAndForeground, toniqColors} from '../styles';
import {socialUrlIcons} from './social-urls';

export const socialUrlsBookPage = defineElementBookPage({
    title: 'Social Urls',
    parent: dataBookChapter,
    examples: [
        createExample({
            title: 'Icons',
            styles: css`
                :host {
                    display: flex;
                    gap: 32px;
                }

                .social-icon-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .social-name {
                    ${applyBackgroundAndForeground(toniqColors.pageSecondary)};
                }
            `,
            render() {
                return Object.entries(socialUrlIcons).map(
                    ([
                        socialName,
                        icon,
                    ]) => {
                        return html`
                            <div class="social-icon-wrapper">
                                <span class="social-name">${socialName}</span>
                                <${ToniqIcon} ${assign(ToniqIcon, {icon})}></${ToniqIcon}>
                            </div>
                        `;
                    },
                );
            },
        }),
    ],
});
