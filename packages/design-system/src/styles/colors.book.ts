import {getObjectTypedKeys} from '@augment-vir/common';
import {createExample, defineElementBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {toniqStylesBookChapter} from '../element-book/book-chapters/toniq-styles.book';
import {extractAllCssVars} from '../element-book/book-helpers/extract-css-vars';
import {DualColorDefinition, applyBackgroundAndForeground, toniqColors} from './colors';
import {toniqFontStyles} from './fonts';

const colorExampleStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 4px;
        ${toniqFontStyles.labelFont};
        ${toniqFontStyles.monospaceFont};
        color: ${toniqColors.pageSecondary.foregroundColor};
    }

    .color-example {
        text-decoration: underline;
        width: 100px;
        height: 60px;
        border: 1px solid ${toniqColors.divider.foregroundColor};
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${toniqFontStyles.h2Font};
    }
`;

function createColorExample(colorName: string, colorDefinition: DualColorDefinition) {
    const extracted = extractAllCssVars(applyBackgroundAndForeground(colorDefinition));

    return createExample({
        title: colorName,
        styles: colorExampleStyles,
        render() {
            return html`
                <div class="color-example" style=${applyBackgroundAndForeground(colorDefinition)}>
                    <span>Aa</span>
                </div>
                <div class="css-vars">
                    ${Object.values(extracted).map((extractedValue) => {
                        return html`
                            <span>
                                ${extractedValue.cssVarName}: ${extractedValue.defaultValue}
                            </span>
                        `;
                    })}
                </div>
            `;
        },
    });
}

const toniqColorsExamples = getObjectTypedKeys(toniqColors).map((colorKey) => {
    return createColorExample(colorKey, toniqColors[colorKey]);
});

export const toniqColorsBookPage = defineElementBookPage({
    title: 'Toniq Colors',
    parent: toniqStylesBookChapter,
    examples: toniqColorsExamples,
    descriptionParagraphs: ['Accessed via the "toniqColors" export.'],
});
