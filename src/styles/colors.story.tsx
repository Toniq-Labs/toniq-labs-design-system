import {ComponentMeta} from '@storybook/react';
import {getObjectTypedKeys} from 'augment-vir';
import React from 'react';
import {colorCssVarNames, ColorKey, colors} from './colors';

const componentStoryMeta: ComponentMeta<any> = {
    title: 'Styles/Colors',
};

export default componentStoryMeta;

export const mainStory = () => {
    type ColorInfo = {colorValue: string; colorKey: ColorKey; cssVarName: string};

    const colorsAndNames: ColorInfo[] = getObjectTypedKeys(colors).map((colorKey) => {
        const colorValue = colors[colorKey];
        const cssVarName = colorCssVarNames[colorKey];

        return {
            colorValue: String(colorValue),
            colorKey,
            cssVarName: String(cssVarName),
        };
    });

    const colorInstances = colorsAndNames.map((colorInfo) => {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '460px',
                    justifyContent: 'center',
                    margin: '24px 0',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '24px',
                        borderRadius: '4px',
                        border: `1px solid ${colors.dividerForegroundColor}`,
                    }}
                >
                    <div
                        style={{
                            width: '200px',
                            height: '75px',
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            border: '1px solid black',
                            backgroundColor: colorInfo.colorValue,
                        }}
                    ></div>
                    <span>{colorInfo.colorKey}</span>
                    <span>{colorInfo.cssVarName}</span>
                </div>
            </div>
        );
    });

    return (
        <article style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {colorInstances}
        </article>
    );
};
mainStory.storyName = 'Colors';
