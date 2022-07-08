export function createCssVarMap(value: string, cssVars: string[]) {
    return cssVars.reduce((accum, currentCssVarName) => {
        accum[currentCssVarName] = value;
        return accum;
    }, {} as Record<string, string>);
}
