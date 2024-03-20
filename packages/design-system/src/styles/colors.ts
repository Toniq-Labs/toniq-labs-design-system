import {camelCaseToKebabCase, mapObjectValues} from '@augment-vir/common';
import {CSSResult, css, unsafeCSS} from 'element-vir';

export type ColorKey = keyof typeof fallbackColors;

export type DualColorDefinition = Readonly<{
    foregroundColor: CSSResult;
    backgroundColor: CSSResult;
}>;

function swapColors(input: DualColorDefinition): DualColorDefinition {
    return {
        foregroundColor: input.backgroundColor,
        backgroundColor: input.foregroundColor,
    };
}

const mainLightPalette = (() => {
    const pagePrimary: DualColorDefinition = {
        /** Default page background color. */
        backgroundColor: css`#ffffff`,
        /** Default page foreground (usually text) color. */
        foregroundColor: css`#000000`,
    };

    const brandPrimary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#00D093`,
    };
    /** For secondary foreground (text) elements, lighter than the primary foreground color. */
    const pageSecondary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#ACADAD`,
    };
    /**
     * For tertiary foreground (text) elements, slightly lighter than the secondary foreground
     * color.
     */
    const pageTertiary: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`#D6D6D6`,
    };

    const pageInteraction: DualColorDefinition = {
        ...brandPrimary,
    };

    const pageInteractionHover: DualColorDefinition = {
        ...brandPrimary,
        foregroundColor: css`#00A876`,
    };

    const pageInteractionActive: DualColorDefinition = {
        ...brandPrimary,
        foregroundColor: css`#1D6852`,
    };

    /** The color for divider lines. */
    const divider: DualColorDefinition = {
        ...pageTertiary,
    };

    const dividerFaint: DualColorDefinition = {
        ...pagePrimary,
        foregroundColor: css`rgba(0, 0, 0, 0.08)`,
    };

    /** Drop shadow for some rounded rectangle shapes. */
    const dropShadow: DualColorDefinition = {
        ...pagePrimary,
        backgroundColor: css`#D2EEFA`,
    };

    const accentPrimary: DualColorDefinition = swapColors(pageInteraction);
    const accentPrimaryHover: DualColorDefinition = swapColors(pageInteractionHover);
    const accentPrimaryActive: DualColorDefinition = swapColors(pageInteractionActive);

    const pageDarkPrimary = accentPrimaryActive;

    const accentSecondary: DualColorDefinition = {
        /** Color for secondary item backgrounds, like inactive toggle buttons or header backgrounds. */
        backgroundColor: css`#F1F3F6`,
        /** Color for foreground (text) on top of accentSecondaryBackgroundColor. */
        foregroundColor: pagePrimary.foregroundColor,
    };
    const accentTertiary: DualColorDefinition = {
        ...accentSecondary,
        /**
         * Additional color for secondary foregrounds (text) when an element is inactive or its
         * foreground is just a placeholder.
         */
        foregroundColor: css`#9A9A9D`,
    };

    const allColors = {
        brandPrimary,
        pagePrimary,
        pageSecondary,
        pageTertiary,
        pageInteraction,
        pageInteractionHover,
        pageInteractionActive,
        divider,
        dividerFaint,
        dropShadow,
        pageDarkPrimary,
        accentPrimary,
        accentPrimaryHover,
        accentPrimaryActive,
        accentSecondary,
        accentTertiary,
    } as const satisfies Record<string, DualColorDefinition>;

    return allColors;
})();

/**
 * These are used as fallback values for CSS vars. They should never be used directly, as that would
 * block the CSS vars from being effective.
 */
const fallbackColors = mainLightPalette;

function colorKeyToCssVarName(colorKey: ColorKey, type: keyof DualColorDefinition): CSSResult {
    return unsafeCSS(`--toniq-${camelCaseToKebabCase(colorKey)}-${camelCaseToKebabCase(type)}`);
}

/**
 * CSS var names for all the design system colors. These should not be used as VALUES in CSS, use
 * the "toniqColors" object exported below for CSS values. This object's values should be used as
 * properties. Meaning, these values should only be used for setting the CSS variables (if needed).
 */
export const toniqColorCssVarNames: Record<ColorKey, DualColorDefinition> = mapObjectValues(
    fallbackColors,
    (colorKey) => {
        const cssVarsDefinition: DualColorDefinition = {
            backgroundColor: colorKeyToCssVarName(colorKey, 'backgroundColor'),
            foregroundColor: colorKeyToCssVarName(colorKey, 'foregroundColor'),
        };
        return cssVarsDefinition;
    },
);

export function colorValueToVarCall(
    colorKey: ColorKey,
    type: keyof DualColorDefinition,
): CSSResult {
    const fallbackColor = fallbackColors[colorKey][type];
    const cssVarName = toniqColorCssVarNames[colorKey][type];

    return css`var(${cssVarName}, ${fallbackColor})`;
}

/**
 * Colors for the design system. These should be used directly as values in CSS.
 *
 * These colors use all the design system CSS vars and include fallback values to the default design
 * system palette. To override any of these colors, set the CSS var from the corresponding ColorKey
 * in toniqColorCssVarNames.
 */
export const toniqColors: Record<ColorKey, DualColorDefinition> = mapObjectValues(
    toniqColorCssVarNames,
    (colorKey): DualColorDefinition => {
        return {
            foregroundColor: colorValueToVarCall(colorKey, 'foregroundColor'),
            backgroundColor: colorValueToVarCall(colorKey, 'backgroundColor'),
        };
    },
);

export function applyBackgroundAndForeground(colorDefinition: DualColorDefinition): CSSResult {
    return css`
        background-color: ${colorDefinition.backgroundColor};
        color: ${colorDefinition.foregroundColor};
    `;
}
