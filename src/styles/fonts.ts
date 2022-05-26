import {camelCaseToKebabCase, getObjectTypedKeys, mapObject} from 'augment-vir';
import {css} from 'element-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {wrapTypeWithReadonly} from '../augments/type';
import {toniqColors} from './colors';

export type FontStyleDefinition = CSSResult;
export type FontStyleKey = keyof typeof toniqFontStylesCssVarNames;

// these should not be exported, hence they are a separate object
const fontStylesFallbacks = wrapTypeWithReadonly<
    Record<`${string}Font`, Readonly<Record<string, CSSResult>>>
>()({
    toniqFont: {
        'font-family': css`'Rubik', sans-serif`,
    },
    normalWeightFont: {
        'font-weight': css`400`,
    },
    boldFont: {
        'font-weight': css`600`,
    },
    extraBoldFont: {
        'font-weight': css`900`,
    },
    paragraphFont: {
        'line-height': css`24px`,
        'font-size': css`16px`,
    },
    // no additional CSS styles, this will just be a combination of paragraphFont and boldFont
    boldParagraphFont: {},
    labelFont: {
        'line-height': css`16px`,
        'font-size': css`12px`,
    },
    h1Font: {
        'line-height': css`96px`,
        'font-size': css`64px`,
    },
    h2Font: {
        'line-height': css`48px`,
        'font-size': css`32px`,
    },
    h3Font: {
        'line-height': css`32px`,
        'font-size': css`24px`,
    },
});

export const toniqFontStylesCssVarNames = mapObject(
    fontStylesFallbacks,
    (fontStyleKey, fontFallbacksRecord) => {
        const styleName = unsafeCSS(camelCaseToKebabCase(fontStyleKey.replace(/Font$/, '')));
        const cssVarNames = mapObject(fontFallbacksRecord, (fontPropName) => {
            const prop = unsafeCSS(fontPropName);
            return css`--toniq-font-${styleName}-${prop}`;
        });
        return cssVarNames;
    },
);

function combineFallbacksAndVars(fontStylesKey: FontStyleKey): CSSResult {
    const vars = toniqFontStylesCssVarNames[fontStylesKey];
    const fallbacks = fontStylesFallbacks[fontStylesKey];
    const combined = getObjectTypedKeys(vars).map((propName) => {
        const fallbackValue = fallbacks[propName];
        const varName = vars[propName];

        return css`
            ${unsafeCSS(propName)}: var(${varName}, ${fallbackValue});
        `;
    });
    return unsafeCSS(combined.join('\n'));
}

export const toniqFontStyles = (() => {
    const toniqFont = css`
        color: ${toniqColors.pagePrimary.foregroundColor};
        ${combineFallbacksAndVars('toniqFont')};
    `;

    const normalWeightFont = css`
        ${toniqFont};
        ${combineFallbacksAndVars('normalWeightFont')};
    `;
    const boldFont = css`
        ${toniqFont};
        ${combineFallbacksAndVars('boldFont')};
    `;
    const extraBoldFont = css`
        ${toniqFont};
        ${combineFallbacksAndVars('extraBoldFont')};
    `;

    const paragraphFont = css`
        ${toniqFont};
        font-style: normal;
        ${combineFallbacksAndVars('paragraphFont')};
        ${normalWeightFont};
    `;
    const boldParagraphFont = css`
        ${toniqFont};
        ${paragraphFont};
        ${boldFont};
    `;
    const labelFont = css`
        ${toniqFont};
        font-style: normal;
        ${combineFallbacksAndVars('labelFont')};
        ${boldFont}
    `;

    const h1Font = css`
        ${toniqFont};
        font-style: normal;
        ${combineFallbacksAndVars('h1Font')};
        ${extraBoldFont};
    `;

    const h2Font = css`
        ${toniqFont};
        font-style: normal;
        ${combineFallbacksAndVars('h2Font')};
        ${boldFont};
    `;

    const h3Font = css`
        ${toniqFont};
        font-style: normal;
        ${combineFallbacksAndVars('h3Font')};
        ${boldFont};
    `;

    return wrapTypeWithReadonly<Record<FontStyleKey, FontStyleDefinition>>()({
        toniqFont,
        normalWeightFont,
        boldFont,
        extraBoldFont,
        paragraphFont,
        boldParagraphFont,
        labelFont,
        h1Font,
        h2Font,
        h3Font,
    });
})();
