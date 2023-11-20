import {addSuffix} from '@augment-vir/common';
import {BookPageControlTypeEnum, definePageControl} from 'element-book';
import {css, html} from 'element-vir';
import {isRunTimeType} from 'run-time-assertions';
import {ToniqIcon, defineToniqElement} from '../elements';
import {toniqColors, toniqIconCssVars} from '../styles';
import {allIconsByCategory} from './index';
import {ToniqSvg} from './toniq-svg';

export const ToniqIconBookHelper = defineToniqElement<{icon: ToniqSvg}>()({
    tagName: 'toniq-icon-book-viewer',
    styles: css`
        :host {
            display: inline-flex;
            padding: 8px;
            border-radius: 8px;
        }

        :host(:hover) {
            background-color: ${toniqColors.accentTertiary.backgroundColor};
        }
    `,
    renderCallback({inputs}) {
        return html`
            <${ToniqIcon.assign({icon: inputs.icon})}></${ToniqIcon}>
        `;
    },
});

export const allIconsByName = Object.values(allIconsByCategory).reduce(
    (accum, icons) => {
        icons.forEach((icon) => {
            if (icon.name in accum) {
                throw new Error(`Icon name duplicate: '${icon.name}'`);
            }

            accum[icon.name] = icon;
        });

        return accum;
    },
    {} as Record<string, ToniqSvg>,
);

export const allIconNames = Object.keys(allIconsByName).sort();

export function createIconPicker(defaultIconName: string) {
    return definePageControl({
        controlType: BookPageControlTypeEnum.Dropdown,
        initValue: defaultIconName,
        options: [
            'None',
            ...allIconNames,
        ],
    });
}

export const iconControls = {
    'CSS color': definePageControl({
        controlType: BookPageControlTypeEnum.Color,
        initValue: '',
    }),
    [String(toniqIconCssVars['toniq-icon-stroke-color'].name)]: definePageControl({
        controlType: BookPageControlTypeEnum.Color,
        initValue: '',
    }),
    [String(toniqIconCssVars['toniq-icon-fill-color'].name)]: definePageControl({
        controlType: BookPageControlTypeEnum.Color,
        initValue: '',
    }),
    [String(toniqIconCssVars['toniq-icon-stroke-width'].name)]: definePageControl({
        controlType: BookPageControlTypeEnum.Color,
        initValue: '',
    }),
    [String(toniqIconCssVars['toniq-icon-stroke-width'].name)]: definePageControl({
        controlType: BookPageControlTypeEnum.Number,
        initValue: 2,
    }),
};

export function iconCssVarsToStyles(controls: Record<string, string | number>) {
    const styles = Object.entries(controls)
        .filter(
            ([
                ,
                value,
            ]) => value !== '' && value != undefined,
        )
        .map(
            ([
                cssVarName,
                value,
            ]) => {
                if (cssVarName.toLowerCase() === 'css color') {
                    cssVarName = 'color';
                }
                if (isRunTimeType(value, 'number')) {
                    value = addSuffix({value, suffix: 'px'});
                }
                return `${cssVarName}: ${value};`;
            },
        )
        .join('\n');

    return styles;
}
