export const toniqSvgColorCssVarName = '--toniq-labs-icon-stroke-color' as const;
export const toniqSvgStrokeColorCssVarName = '--toniq-labs-toniq-icon-stroke-color' as const;
export const toniqSvgFillColorCssVarName = '--toniq-labs-toniq-icon-fill-color' as const;

function createVarCall(firstVar: string): string {
    return `var(${firstVar}, var(${toniqSvgColorCssVarName}, currentColor))`;
}
export const colorUsage = {
    stroke: createVarCall(toniqSvgStrokeColorCssVarName),
    fill: createVarCall(toniqSvgFillColorCssVarName),
};
