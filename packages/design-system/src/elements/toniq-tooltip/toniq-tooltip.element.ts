import {css, html} from 'element-vir';
import {toniqColors, toniqShadows} from '../../styles';
import {defineToniqElementNoInputs} from '../define-toniq-element';

export const ToniqTooltip = defineToniqElementNoInputs({
    tagName: 'toniq-tooltip',
    styles: css`
        :host {
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${toniqColors.accentPrimary.backgroundColor};
            ${toniqShadows.menuShadow};
            color: ${toniqColors.pagePrimary.foregroundColor};
            background-color: ${toniqColors.pagePrimary.backgroundColor};
        }
    `,
    renderCallback() {
        return html`
            <slot></slot>
        `;
    },
});
