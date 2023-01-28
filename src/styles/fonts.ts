import {camelCaseToKebabCase, getObjectTypedKeys, mapObjectValues} from '@augment-vir/common';
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
    boldLabelFont: {},
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
    monospaceFont: {
        'font-family': css`'Inconsolata', monospace`,
        'line-height': css`1.125em`,
    },
});

export const toniqFontStylesCssVarNames = mapObjectValues(
    fontStylesFallbacks,
    (fontStyleKey, fontFallbacksRecord) => {
        const styleName = unsafeCSS(camelCaseToKebabCase(fontStyleKey.replace(/Font$/, '')));
        const cssVarNames = mapObjectValues(fontFallbacksRecord, (fontPropName) => {
            const prop = unsafeCSS(fontPropName);
            return css`--toniq-font-${styleName}-${prop}`;
        });
        return cssVarNames as Record<string, CSSResult>;
    },
) as {
    [StyleName in keyof typeof fontStylesFallbacks]: {
        [cssPropName in keyof (typeof fontStylesFallbacks)[StyleName]]: CSSResult;
    };
};

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
        font-style: normal;
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
        ${combineFallbacksAndVars('labelFont')};
        ${normalWeightFont};
    `;

    const boldLabelFont = css`
        ${labelFont};
        ${boldFont};
    `;

    const h1Font = css`
        ${combineFallbacksAndVars('h1Font')};
        ${extraBoldFont};
    `;

    const h2Font = css`
        ${combineFallbacksAndVars('h2Font')};
        ${boldFont};
    `;

    const h3Font = css`
        ${combineFallbacksAndVars('h3Font')};
        ${boldFont};
    `;

    const monospaceFont = css`
        ${combineFallbacksAndVars('monospaceFont')}
    `;

    return wrapTypeWithReadonly<Record<FontStyleKey, FontStyleDefinition>>()({
        toniqFont,
        normalWeightFont,
        boldFont,
        extraBoldFont,
        paragraphFont,
        boldParagraphFont,
        labelFont,
        boldLabelFont,
        h1Font,
        h2Font,
        h3Font,
        monospaceFont,
    });
})();
