import {assign, css, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {ToniqSvg} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqChip = defineToniqElement({
    tagName: 'toniq-chip',
    props: {
        text: '',
        icon: undefined as ToniqSvg | undefined,
    },
    styles: css`
        :host {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            ${toniqFontStyles.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(.toniq-chip-secondary) {
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }
    `,
    renderCallback: ({props}) => {
        const iconTemplate: TemplateResult | string = props.icon
            ? html`<${ToniqIcon}
                ${assign(ToniqIcon.props.icon, props.icon)}
            ></${ToniqIcon}>`
            : '';
        return html`
            <slot>${iconTemplate}${props.text}</slot>
        `;
    },
});
