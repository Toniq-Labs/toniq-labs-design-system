import {css, html} from 'element-vir';
import {ViraIcon, viraIconCssVars} from 'vira';
import {toniqIconCssVars} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement<typeof ViraIcon.inputsType>()({
    tagName: 'toniq-icon',
    styles: css`
        :host {
            display: inline-flex;
            ${viraIconCssVars['vira-icon-fill-color'].name}: ${toniqIconCssVars[
                'toniq-icon-fill-color'
            ].value}
            ${viraIconCssVars['vira-icon-stroke-color'].name}: ${toniqIconCssVars[
                'toniq-icon-stroke-color'
            ].value}
            ${viraIconCssVars['vira-icon-stroke-width'].name}: ${toniqIconCssVars[
                'toniq-icon-stroke-width'
            ].value}
        }
    `,
    renderCallback({inputs}) {
        return html`
            <${ViraIcon.assign(inputs)}></${ViraIcon}>
        `;
    },
});
