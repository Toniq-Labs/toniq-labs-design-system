import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {CircleDot24Icon, ToniqSvg, allIconsByCategory} from '../../icons';
import {iconControls, iconCssVarsToStyles} from '../../icons/icon.book-helper';
import {InfoCircle16Icon} from '../../icons/svgs/core-16/info-circle-16.icon';
import {FolderOff48Icon} from '../../icons/svgs/core-48/folder-off-48.icon';
import {Api64Icon} from '../../icons/svgs/core-64/api-64.icon';
import {toniqIconCssVars} from '../../styles';
import {ToniqIcon} from './toniq-icon.element';

export const toniqIconBookPage = defineBookPage({
    title: ToniqIcon.tagName,
    parent: elementsBookPage,
    controls: iconControls,
    elementExamplesCallback({defineExample}) {
        const exampleConfigs: ReadonlyArray<{icon: ToniqSvg | undefined}> = [
            {
                icon: Api64Icon,
            },
            {
                icon: FolderOff48Icon,
            },
            {
                icon: CircleDot24Icon,
            },
            {
                icon: InfoCircle16Icon,
            },
            {
                icon: undefined,
            },
        ];

        defineExample({
            title: 'sizes',
            styles: css`
                :host {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }
            `,
            renderCallback({controls}) {
                return exampleConfigs.map((exampleConfig) => {
                    return html`
                        <${ToniqIcon.assign({
                            icon: exampleConfig.icon,
                        })}
                            style=${iconCssVarsToStyles(controls)}
                        ></${ToniqIcon}>
                    `;
                });
            },
        });

        defineExample({
            title: 'brand icons',
            renderCallback({controls}) {
                const forcedColorOverride = css`
                    ${toniqIconCssVars['toniq-icon-fill-color'].name}: orange;
                `;

                return allIconsByCategory['third-party-brands'].map((brandIcon) => {
                    return html`
                        <${ToniqIcon.assign({icon: brandIcon})}
                            style=${iconCssVarsToStyles(controls)}
                        ></${ToniqIcon}>
                        <${ToniqIcon.assign({icon: brandIcon})}
                            style=${forcedColorOverride}
                        ></${ToniqIcon}>
                    `;
                });
            },
        });
    },
});
