import {BookPageControlTypeEnum, defineBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {CircleDot24Icon, ToniqSvg} from '../../icons';
import {InfoCircle16Icon} from '../../icons/svgs/core-16/info-circle-16.icon';
import {Kyc32Icon} from '../../icons/svgs/core-32/kyc-32.icon';
import {FolderOff48Icon} from '../../icons/svgs/core-48/folder-off-48.icon';
import {Api64Icon} from '../../icons/svgs/core-64/api-64.icon';
import {toniqIconColorCssVarNames} from '../../styles';
import {ToniqIcon} from './toniq-icon.element';

export const toniqIconBookPage = defineBookPage({
    title: ToniqIcon.tagName,
    parent: elementsBookPage,
    controls: {
        'CSS color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        },
        [toniqIconColorCssVarNames.color]: {
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        },
        [toniqIconColorCssVarNames.strokeColor]: {
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        },
        [toniqIconColorCssVarNames.fillColor]: {
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        },
    },
    elementExamplesCallback({defineExample}) {
        const exampleConfigs: ReadonlyArray<{icon: ToniqSvg | undefined}> = [
            {
                icon: Api64Icon,
            },
            {
                icon: FolderOff48Icon,
            },
            {
                icon: Kyc32Icon,
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
                const styles = Object.entries(controls)
                    .filter(
                        ([
                            ,
                            value,
                        ]) => !!value,
                    )
                    .map(
                        ([
                            cssVarName,
                            value,
                        ]) => {
                            if (cssVarName.toLowerCase().includes('css')) {
                                cssVarName = 'color';
                            }
                            return `${cssVarName}: ${value};`;
                        },
                    )
                    .join('\n');

                return exampleConfigs.map((exampleConfig) => {
                    return html`
                        <${ToniqIcon}
                            style=${styles}
                            ${assign(ToniqIcon, {
                                icon: exampleConfig.icon,
                            })}
                        ></${ToniqIcon}>
                    `;
                });
            },
        });
    },
});
