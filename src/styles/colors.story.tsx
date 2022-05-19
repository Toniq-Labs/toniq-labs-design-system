import {ComponentMeta} from '@storybook/react';
import {getObjectTypedKeys} from 'augment-vir';
import React from 'react';
import {colorCssVarNames, colors} from './colors';

const componentStoryMeta: ComponentMeta<any> = {
    title: 'Styles/Colors',
};

export default componentStoryMeta;

export const mainStory = () => {
    const colorInstances = getObjectTypedKeys(colors).map((colorKey) => {
        const colorDefinitions = colors[colorKey];
        const colorCssVars = colorCssVarNames[colorKey];

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
                        border: `1px solid ${colors.divider.foregroundColor}`,
                    }}
                >
                    <div
                        className="color-swatch"
                        style={{
                            width: '150px',
                            height: '75px',
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            border: `1px solid ${colors.divider.foregroundColor}`,
                            backgroundColor: String(colorDefinitions.backgroundColor),
                            color: String(colorDefinitions.foregroundColor),
                            textDecoration: 'underline',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2.5em',
                        }}
                    >
                        Aa
                    </div>
                    <span>{colorKey}</span>
                    <span style={{color: String(colors.pageTertiary.foregroundColor)}}>
                        {String(colorCssVars.foregroundColor)}
                    </span>
                    <span style={{color: String(colors.pageTertiary.foregroundColor)}}>
                        {String(colorCssVars.backgroundColor)}
                    </span>
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
