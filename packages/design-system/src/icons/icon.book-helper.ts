import {assign, css, html} from 'element-vir';
import {ToniqIcon, defineToniqElement} from '../elements';
import {toniqColors} from '../styles';
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
            <${ToniqIcon} ${assign(ToniqIcon, {icon: inputs.icon})}></${ToniqIcon}>
        `;
    },
});

export const allIconsByName = Object.values(allIconsByCategory).reduce((accum, icons) => {
    icons.forEach((icon) => {
        if (icon.iconName in accum) {
            throw new Error(`Icon name duplicate: '${icon.iconName}'`);
        }

        accum[icon.iconName] = icon;
    });

    return accum;
}, {} as Record<string, ToniqSvg>);

export const allIconNames = Object.keys(allIconsByName).sort();
