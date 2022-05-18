import {camelCaseToKebabCase, mapObject} from 'augment-vir';
import {css} from 'element-vir';
import {CSSResult, unsafeCSS} from 'lit';

export type ColorName = keyof typeof defaultPalette;

/** This ensures the value of the input while maintaining object key names. */
function cssResults<T extends Record<string, CSSResult>>(input: T): T {
    return input;
}

const standardPalette = cssResults({
    /** Primary brand color: the logo color. */
    primaryBrandColor: css`#00D093`,
    /** Page background color. */
    primaryBackgroundColor: css`#ffffff`,
    /** Page foreground (text) color. */
    primaryForegroundColor: css`#000000`,
    primaryForegroundInteractionHoverColor: css`#00D093`,
    /** For secondary foreground (text) elements, lighter than the primary foreground color. */
    secondaryForegroundColor: css`#5B5D5C`,
    /** For tertiary foreground (text) elements, slightly lighter than the secondary foreground color. */
    tertiaryForegroundColor: css`#ACADAD`,
    /** The foreground color for divider lines. */
    dividerForegroundColor: css`#D6D6D6`,
    /** Drop shadow for some rounded rectangle shapes. */
    dropShadowColor: css`#D2EEFA`,
});

const accentPalette = cssResults({
    /** Color for primary accents, like primary buttons. */
    accentPrimaryBackgroundColor: css`#00D093`,
    /** Color for the foreground (text) on top of accentPrimaryBackgroundColor. */
    accentPrimaryForegroundColor: css`#ffffff`,
    /** Color for secondary item backgrounds, like inactive toggle buttons or header backgrounds. */
    accentSecondaryBackgroundColor: css`#F1F3F6`,
    /** Color for foreground (text) on top of accentSecondaryBackgroundColor. */
    accentSecondaryForegroundColor: css`#000000`,
    /**
     * Additional color for secondary foregrounds (text) when an element is inactive or its
     * foreground is just a placeholder.
     */
    accentSecondaryInactiveForegroundColor: css`#9A9A9D`,
});

/**
 * These are used as fallback values for CSS vars. They should never be used directly, as that would
 * block the CSS vars from being effective.
 */
const defaultPalette = cssResults({
    ...standardPalette,
    ...accentPalette,
});

/**
 * CSS var names for all the design system colors. These should not be used as VALUES in CSS, use
 * the "colors" object exported below for that. These values should be used as properties. Meaning,
 * these values should only be used for setting the CSS variable values (if needed).
 */
export const colorCssVarNames: Record<ColorName, CSSResult> = mapObject(
    defaultPalette,
    (colorName) => {
        const cssVarName = `--toniq-${camelCaseToKebabCase(colorName)}`;
        return unsafeCSS(cssVarName);
    },
);

/**
 * Colors for the design system. These should be used directly as values in CSS.
 *
 * These colors use all the design system CSS vars and include fallback values to the default design
 * system palette. To override any of these colors, set the CSS var from the corresponding ColorName
 * key in colorCssVarNames.
 */
export const colors: Record<ColorName, CSSResult> = mapObject(
    colorCssVarNames,
    (colorName, cssColorVarName) => {
        const fallbackColor = defaultPalette[colorName];
        return css`var(${cssColorVarName}, ${fallbackColor})`;
    },
);
