export const toniqIconColorCssVarNames = {
    color: `--icon-stroke-color`,
    strokeColor: `--toniq-icon-stroke-color`,
    fillColor: `--toniq-icon-fill-color`,
} as const;

function createVarCall(
    firstVar: typeof toniqIconColorCssVarNames[keyof typeof toniqIconColorCssVarNames],
): string {
    return `var(${firstVar}, var(${toniqIconColorCssVarNames.color}, currentColor))`;
}

/** For usage only in the SVG files themselves to apply the property CSS variable var calls. */
export const toniqIconColors = {
    stroke: createVarCall(toniqIconColorCssVarNames.strokeColor),
    fill: createVarCall(toniqIconColorCssVarNames.fillColor),
};
