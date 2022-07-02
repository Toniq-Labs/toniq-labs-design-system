import {getObjectTypedKeys, mapObject} from 'augment-vir';
import {CSSResult} from 'lit';
import {cssToReactStyleObject} from '../styles/css-to-react';

export function getAllCssVars(
    fontStyle: CSSResult,
): Record<string, {cssVarName: string; defaultValue: string}> {
    const stylesObject = cssToReactStyleObject(fontStyle);
    const cssVars = mapObject(stylesObject, (key, value) => {
        const match = String(value).match(/var\(\s*(--[^,]+),\s*([^\)]+)\s*\)/);
        console.log({match, value});
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
