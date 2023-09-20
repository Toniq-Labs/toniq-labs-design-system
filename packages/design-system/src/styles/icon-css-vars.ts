import {mapObjectValues} from '@augment-vir/common';
import {unsafeCSS} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';
import {viraIconCssVars} from 'vira';

export const toniqIconCssVars = defineCssVars({
    'toniq-icon-fill-color': viraIconCssVars['vira-icon-fill-color'].default,
    'toniq-icon-stroke-color': viraIconCssVars['vira-icon-stroke-color'].default,
    'toniq-icon-stroke-width': '2px',
});

export const toniqIconCssVarWithFallback = mapObjectValues(toniqIconCssVars, (key, value) => {
    return (customFallback: string) => {
        return unsafeCSS(`var(${value.name}, ${customFallback})`);
    };
});
