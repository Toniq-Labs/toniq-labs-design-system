export const toniqIconColorCssVarNames = {
    color: `--icon-stroke-color`,
    strokeColor: `--toniq-icon-stroke-color`,
    fillColor: `--toniq-icon-fill-color`,
} as const;

function createVarCall(
    firstVar: (typeof toniqIconColorCssVarNames)[keyof typeof toniqIconColorCssVarNames],
    fallbackValue: string,
): string {
    return `var(${firstVar}, var(${toniqIconColorCssVarNames.color}, ${fallbackValue}))`;
}

/** For usage only in the SVG files themselves to apply the CSS variable var calls. */
export const toniqIconColors = {
    stroke: (fallbackColor: string = 'currentColor') =>
        createVarCall(toniqIconColorCssVarNames.strokeColor, fallbackColor),
    fill: (fallbackColor: string = 'currentColor') =>
        createVarCall(toniqIconColorCssVarNames.fillColor, fallbackColor),
};
