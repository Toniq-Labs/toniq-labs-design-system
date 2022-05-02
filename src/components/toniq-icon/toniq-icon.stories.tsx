import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory} from '../../icons';
import {
    toniqSvgColorCssVarName,
    toniqSvgFillColorCssVarName,
    toniqSvgStrokeColorCssVarName,
} from '../../icons/toniq-svg-colors';
import {ToniqIcon} from './toniq-icon';

const storyControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) => input)(
    {
        color: {
            name: 'Color',
            defaultValue: 'red',
            control: 'color',
        },
        applyColor: {
            name: 'Apply Color To',
            control: 'select',
            options: [
                'Icon color CSS var',
                'Icon fill color CSS var',
                'Icon stroke color CSS var',
                'CSS color property',
            ],
        },
    } as const,
);

const componentStoryMeta: ComponentMeta<typeof ToniqIcon> = {
    title: 'Design System/Toniq Icon',
    component: ToniqIcon,
    argTypes: storyControls as ArgTypes,
};

export default componentStoryMeta;

export const AllIcons = (controls: Record<keyof typeof storyControls, string>) => {
    const iconCategories = (
        Object.keys(allIconsByCategory) as (keyof typeof allIconsByCategory)[]
    ).map((categoryName) => {
        const iconInstances = allIconsByCategory[categoryName].map((icon) => (
            <ToniqIcon title={icon.iconName} icon={icon} />
        ));

        const colorStyles =
            controls.applyColor === 'Icon color CSS var'
                ? {
                      [toniqSvgColorCssVarName]: controls.color,
                  }
                : controls.applyColor === 'Icon fill color CSS var'
                ? {
                      [toniqSvgFillColorCssVarName]: controls.color,
                  }
                : controls.applyColor === 'Icon stroke color CSS var'
                ? {
                      [toniqSvgStrokeColorCssVarName]: controls.color,
                  }
                : controls.applyColor === 'CSS color property'
                ? {
                      color: controls.color,
                  }
                : {};

        return (
            <section
                style={{
                    fontFamily: 'sans-serif',
                }}
            >
                <h3>{categoryName}</h3>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', ...colorStyles}}>
                    {iconInstances}
                </div>
            </section>
        );
    });
    return (
        <div style={{display: 'flex', gap: '16px', flexDirection: 'column'}}>{iconCategories}</div>
    );
};
