import {ComponentMeta} from '@storybook/react';
import {getObjectTypedKeys} from 'augment-vir';
import React from 'react';
import {cssToReactStyleObject} from '../augments/react';
import {toniqColorCssVarNames, toniqColors} from './colors';
import {toniqFontStyles} from './fonts';

const componentStoryMeta: ComponentMeta<any> = {
    title: 'Styles/Colors',
};

export default componentStoryMeta;

export const mainStory = () => {
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
                        padding: '32px',
                        borderRadius: '4px',
                        border: `1px solid ${toniqColors.divider.foregroundColor}`,
                    }}
                >
                    <div
                        className="color-swatch"
                        style={{
                            width: '150px',
                            height: '100px',
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            border: `1px solid ${toniqColors.divider.foregroundColor}`,
                            backgroundColor: String(colorDefinitions.backgroundColor),
                            color: String(colorDefinitions.foregroundColor),
                            textDecoration: 'underline',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...cssToReactStyleObject(String(toniqFontStyles.h1Font)),
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

    return (
        <article
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '64px',
                padding: '48px 64px',
                justifyContent: 'center',
            }}
        >
            {colorInstances}
        </article>
    );
};
mainStory.storyName = 'Colors';
