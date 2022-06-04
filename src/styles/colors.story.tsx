import {ArgTypes, Meta} from '@storybook/react';
import {getEnumTypedValues, getObjectTypedKeys} from 'augment-vir';
import React from 'react';
import {wrapTypeWithReadonly} from '../augments/type';
import {toniqColorCssVarNames, toniqColors} from './colors';
import {cssToReactStyleObject} from './css-to-react';
import {toniqFontStyles} from './fonts';
import {createCssVarMap} from './helpers/css-var-story-helpers';

const flattenedColorCssVarNames: string[] = Object.values(toniqColorCssVarNames)
    .map((value): string[] => {
        return Object.values(value).map((mappingValue): string => String(mappingValue));
    })
    .flat();

enum ExtraApplyColorOptions {
    None = 'None',
    AllForeground = 'All Foreground CSS vars',
    AllBackground = 'All Background CSS vars',
    All = 'All CSS vars',
}

const colorsStroyControls = wrapTypeWithReadonly<ArgTypes>()({
    color: {
        name: 'Color',
        control: 'color',
    },
    applyColor: {
        name: 'Apply Color To',
        control: 'select',
        options: [
            ...getEnumTypedValues(ExtraApplyColorOptions),
            ...flattenedColorCssVarNames,
        ],
    },
} as const);

const componentStoryMeta: Meta<any> = {
    title: 'Styles/Toniq Colors',
    argTypes: colorsStroyControls as ArgTypes,
    args: {
        color: undefined,
        applyColor: ExtraApplyColorOptions.None,
    },
    parameters: {
        actions: {
            disabled: true,
        },
    },
};

function generateAppliedCssVarColors(controls: Record<keyof typeof colorsStroyControls, string>) {
    if (!controls.applyColor || !controls.color) {
        return {};
    }
    if (controls.applyColor === ExtraApplyColorOptions.None) {
        return {};
    }
    if (controls.applyColor === ExtraApplyColorOptions.All) {
        return createCssVarMap(controls.color, flattenedColorCssVarNames);
    }
    if (controls.applyColor === ExtraApplyColorOptions.AllBackground) {
        return createCssVarMap(
            controls.color,
            flattenedColorCssVarNames.filter((cssVarName) =>
                cssVarName.endsWith('background-color'),
            ),
        );
    }
    if (controls.applyColor === ExtraApplyColorOptions.AllForeground) {
        return createCssVarMap(
            controls.color,
            flattenedColorCssVarNames.filter((cssVarName) =>
                cssVarName.endsWith('foreground-color'),
            ),
        );
    }

    return {[controls.applyColor]: controls.color};
}

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof colorsStroyControls, string>) => {
    const colorInstances = getObjectTypedKeys(toniqColors).map((colorKey) => {
        const colorDefinitions = toniqColors[colorKey];
        const colorCssVars = toniqColorCssVarNames[colorKey];

        return (
            <div
                key={colorKey}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '16px',
                        borderRadius: '4px',
                        border: `1px solid ${toniqColors.divider.foregroundColor}`,
                    }}
                >
                    <div
                        className="color-swatch"
                        style={{
                            ...cssToReactStyleObject(toniqFontStyles.h2Font),
                            width: '100px',
                            height: '50px',
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            border: `1px solid ${toniqColors.divider.foregroundColor}`,
                            backgroundColor: String(colorDefinitions.backgroundColor),
                            color: String(colorDefinitions.foregroundColor),
                            textDecoration: 'underline',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Aa
                    </div>
                    <span style={{marginTop: '4px'}}>{colorKey}</span>
                    <span style={{color: String(toniqColors.pageTertiary.foregroundColor)}}>
                        {String(colorCssVars.foregroundColor)}
                    </span>
                    <span style={{color: String(toniqColors.pageTertiary.foregroundColor)}}>
                        {String(colorCssVars.backgroundColor)}
                    </span>
                </div>
            </div>
        );
    });

    const cssVarStyling = generateAppliedCssVarColors(controls);

    return (
        <article
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                padding: '16px',
                justifyContent: 'center',
                ...cssToReactStyleObject(toniqFontStyles.paragraphFont),
                ...cssVarStyling,
            }}
        >
            {colorInstances}
        </article>
    );
};
mainStory.storyName = 'Toniq Colors';
