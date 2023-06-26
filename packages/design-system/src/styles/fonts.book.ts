import {getObjectTypedKeys} from '@augment-vir/common';
import {DefineExampleCallback, defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {CSSResult} from 'lit';
import {extractAllCssVars} from '../element-book/book-helpers/extract-css-vars';
import {stylesBookPage} from '../element-book/book-pages/styles.book';
import {toniqColors} from './colors';
import {toniqFontStyles} from './fonts';

const fontExampleStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .css-vars {
        display: flex;
        flex-direction: column;
        gap: 16px;
        ${toniqFontStyles.labelFont};
        ${toniqFontStyles.monospaceFont};
        color: ${toniqColors.pageSecondary.foregroundColor};
    }

    p {
        margin: 0;
        padding: 16px 32px;
    }

    .css-var-name {
        color: ${toniqColors.pageTertiary.foregroundColor};
    }

    .font-example {
        align-self: center;
        border: 1px solid ${toniqColors.divider.foregroundColor};
        border-radius: 8px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .font-style-group {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;

function createFontExample(
    defineExample: DefineExampleCallback<{}>,
    fontStyleName: string,
    fontStyles: CSSResult,
) {
    const extracted = extractAllCssVars(fontStyles);

    return defineExample({
        title: fontStyleName,
        styles: fontExampleStyles,
        renderCallback() {
            return html`
                <div class="font-example" style=${fontStyles}>
                    <p>
                        Aa Bb Cc
                        <br />
                        01 23 45
                    </p>
                </div>
                <div class="css-vars">
                    ${getObjectTypedKeys(extracted).map((propertyName) => {
                        const extractedValue = extracted[propertyName]!;

                        return html`
                            <div class="font-style-group">
                                <span>${propertyName}: ${extractedValue.defaultValue}</span>
                                <span class="css-var-name">${extractedValue.cssVarName}</span>
                            </div>
                        `;
                    })}
                </div>
            `;
        },
    });
}

export const toniqFontsBookPage = defineBookPage({
    title: 'Fonts',
    parent: stylesBookPage,
    elementExamplesCallback({defineExample}) {
        getObjectTypedKeys(toniqFontStyles).map((fontKey) => {
            const fontDefinition = toniqFontStyles[fontKey];

            return createFontExample(defineExample, fontKey, fontDefinition);
        });
    },
    descriptionParagraphs: ['Accessed via the "toniqFontStyles" export.'],
});
