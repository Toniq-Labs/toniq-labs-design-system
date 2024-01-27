import {css, html} from 'element-vir';
import {noNativeSpacing} from 'vira';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';

export enum ToniqHeadingLevel {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
}

/** A replacement for the h* heading elements. */
export const ToniqHeading = defineToniqElement<{level: ToniqHeadingLevel}>()({
    tagName: 'toniq-heading',
    hostClasses: {
        'toniq-heading-h1': ({inputs}) => inputs.level === ToniqHeadingLevel.H1,
        'toniq-heading-h2': ({inputs}) => inputs.level === ToniqHeadingLevel.H2,
        'toniq-heading-h3': ({inputs}) => inputs.level === ToniqHeadingLevel.H3,
        'toniq-heading-h4': ({inputs}) => inputs.level === ToniqHeadingLevel.H4,
    },
    styles: ({hostClasses}) => css`
        ${hostClasses['toniq-heading-h1'].selector} {
            ${toniqFontStyles.h1Font};
        }
        ${hostClasses['toniq-heading-h2'].selector} {
            ${toniqFontStyles.h2Font};
        }
        ${hostClasses['toniq-heading-h3'].selector} {
            ${toniqFontStyles.h3Font};
        }
        ${hostClasses['toniq-heading-h4'].selector} {
            ${toniqFontStyles.h4Font};
        }

        h1,
        h2,
        h3,
        h4 {
            ${noNativeSpacing};
            font: inherit;
        }
    `,
    renderCallback({inputs}) {
        if (inputs.level === ToniqHeadingLevel.H1) {
            return html`
                <h1><slot></slot></h1>
            `;
        } else if (inputs.level === ToniqHeadingLevel.H2) {
            return html`
                <h2><slot></slot></h2>
            `;
        } else if (inputs.level === ToniqHeadingLevel.H3) {
            return html`
                <h3><slot></slot></h3>
            `;
        } else if (inputs.level === ToniqHeadingLevel.H4) {
            return html`
                <h4><slot></slot></h4>
            `;
        } else {
            return html`
                <slot></slot>
            `;
        }
    },
});
