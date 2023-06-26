import {isTruthy} from '@augment-vir/common';
import {BookPageControlTypeEnum, definePageControl} from 'element-book';
import {CSSResult, DeclarativeElementDefinition, unsafeCSS} from 'element-vir';

export function cssVarsToPageControls(elementDefinition: DeclarativeElementDefinition) {
    const controlEntries = Object.keys(elementDefinition.cssVars).map((cssVarName) => {
        return [
            `--${cssVarName}`,
            definePageControl({
                controlType: BookPageControlTypeEnum.Color,
                initValue: '',
            }),
        ];
    });

    return Object.fromEntries(controlEntries);
}

export function cssVarControlValuesToStyles(values: Record<string, any>): CSSResult {
    const styleLines = Object.entries(values)
        .map(
            ([
                controlName,
                controlValue,
            ]) => {
                if (!controlName.startsWith('--')) {
                    return undefined;
                } else if (typeof controlValue !== 'string' || !controlValue) {
                    return undefined;
                } else {
                    return `${controlName}: ${controlValue};`;
                }
            },
        )
        .filter(isTruthy);

    return unsafeCSS(styleLines.join('\n'));
}
