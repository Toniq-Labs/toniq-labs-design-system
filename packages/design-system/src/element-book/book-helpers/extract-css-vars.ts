import {collapseWhiteSpace, getObjectTypedKeys, mapObjectValues} from '@augment-vir/common';
import {CSSResult} from 'lit';

export function extractAllCssVars(
    fontStyle: CSSResult,
): Record<string, {cssVarName: string; defaultValue: string}> {
    const stylesObject = cssToStylesObject(fontStyle);
    const cssVars = mapObjectValues(stylesObject, (key, value) => {
        const match = String(value).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/);
        return match;
    });

    const onlyKeysWithCssVars = getObjectTypedKeys(cssVars).reduce((accum, propertyName) => {
        const value = cssVars[propertyName];
        if (value && value[1] && value[2]) {
            accum[propertyName] = {
                cssVarName: value[1],
                defaultValue: value[2],
            };
        }
        return accum;
    }, {} as Record<string, {cssVarName: string; defaultValue: string}>);

    return onlyKeysWithCssVars;
}

export function cssToStylesObject(input: string | CSSResult): Record<string, unknown> {
    if (typeof input !== 'string') {
        input = String(input);
    }
    const collapsedSpacesAndSemicolons = collapseWhiteSpace(input.replace(/"/g, '\\"')).replace(
        /;(?:\s*;)+/g,
        ';',
    );
    const innerCssJsonString = collapsedSpacesAndSemicolons
        .replace(/; /g, '", "')
        .replace(/: /g, '": "')
        .replace(';', '');
    const cssJson = `{"${innerCssJsonString}"}`;

    try {
        const cssObject = JSON.parse(cssJson);

        const reactStyles = Object.keys(cssObject).reduce((accum, key) => {
            accum[key] = cssObject[key];
            return accum;
        }, {} as Record<string, unknown>);

        return reactStyles;
    } catch (error) {
        console.error(`Failed to JSON parse: ${cssJson}`);
        throw error;
    }
}
