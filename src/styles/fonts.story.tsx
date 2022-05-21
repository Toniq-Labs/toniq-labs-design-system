import {Meta} from '@storybook/react';
import {getObjectTypedKeys} from 'augment-vir';
import React from 'react';
import {cssToReactStyleObject} from '../augments/react';
import {toniqColors} from './colors';
import {toniqFontStyles, toniqFontStylesCssVarNames} from './fonts';

const componentStoryMeta: Meta<any> = {
    title: 'Styles/Fonts',
};

export default componentStoryMeta;

export const mainStory = () => {
    const colorInstances = getObjectTypedKeys(toniqFontStyles).map((fontStyleKey) => {
        const fontStyle = toniqFontStyles[fontStyleKey];
        const fontStyleCssVars = toniqFontStylesCssVarNames[fontStyleKey];

        const varsTemplate = getObjectTypedKeys(fontStyleCssVars).map((cssPropName) => {
            const varName = String(fontStyleCssVars[cssPropName]);
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    key={cssPropName}
                >
                    <span
                        style={{
                            marginTop: '8px',
                            color: String(toniqColors.pageSecondary.foregroundColor),
                        }}
                    >
                        {cssPropName}
                    </span>

                    <span style={{color: String(toniqColors.pageTertiary.foregroundColor)}}>
                        {varName}
                    </span>
                </div>
            );
        });

        return (
            <div
                key={fontStyleKey}
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
                        className="font-style-preview"
                        style={{
                            borderRadius: '4px',
                            border: `1px solid ${toniqColors.divider.foregroundColor}`,
                            padding: '8px 24px',
                            display: 'inline-block',
                            ...cssToReactStyleObject(String(fontStyle)),
                        }}
                    >
                        Aa Bb Cc
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '4px',
                        }}
                    >
                        <span
                            style={{
                                ...cssToReactStyleObject(String(toniqFontStyles.boldFont)),
                            }}
                        >
                            {fontStyleKey}
                        </span>
                        {varsTemplate}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <article
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                padding: '32px',
                justifyContent: 'center',
            }}
        >
            {colorInstances}
        </article>
    );
};
mainStory.storyName = 'Fonts';
