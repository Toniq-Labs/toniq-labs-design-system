import {camelCaseToKebabCase, getObjectTypedKeys, mapObject} from 'augment-vir';
import {css} from 'element-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {wrapTypeWithReadonly} from '../augments/type';

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
    boldParagraphFont: {
        'font-weight': css`900`,
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
    const toniqFont = combineFallbacksAndVars('toniqFont');

    const normalWeightFont = combineFallbacksAndVars('normalWeightFont');
    const boldFont = combineFallbacksAndVars('boldFont');
    const extraBoldFont = combineFallbacksAndVars('extraBoldFont');

    const paragraphFont = css`
        font-style: normal;
        ${combineFallbacksAndVars('paragraphFont')};
        ${normalWeightFont};
    `;
    const boldParagraphFont = css`
        ${paragraphFont};
        ${boldFont};
    `;

    const h1Font = css`
        font-style: normal;
        ${combineFallbacksAndVars('h1Font')};
        ${extraBoldFont};
    `;

    const h2Font = css`
        font-style: normal;
        ${combineFallbacksAndVars('h2Font')};
        ${boldFont};
    `;

    const h3Font = css`
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
        h1Font,
        h2Font,
        h3Font,
    });
})();
