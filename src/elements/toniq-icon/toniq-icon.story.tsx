import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory} from '../../icons';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqIconColorCssVarNames} from '../../styles/icon-colors';
import {ToniqIcon} from '../react-components';

const storyControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) => input)(
    {
        color: {
            name: 'Color',
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
        icon: {
            table: {
                disable: true,
            },
        },
        title: {
            table: {
                disable: true,
            },
        },
    } as const,
);

const componentStoryMeta: ComponentMeta<typeof ToniqIcon> = {
    title: 'Elements/Toniq Icon',
    component: ToniqIcon,
    argTypes: storyControls as ArgTypes,
    args: {
        color: 'black',
        applyColor: 'Icon color CSS var',
    },
    parameters: {
        actions: {
            disabled: true,
        },
    },
};

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof storyControls, string>) => {
    const iconCategories = (
        Object.keys(allIconsByCategory) as (keyof typeof allIconsByCategory)[]
    ).map((categoryName) => {
        const iconInstances = allIconsByCategory[categoryName].map((icon) => (
            <div key={icon.iconName} title={icon.iconName}>
                <ToniqIcon icon={icon} />
            </div>
        ));

        const colorStyles =
            controls.applyColor === 'Icon color CSS var'
                ? {
                      [String(toniqIconColorCssVarNames.color)]: controls.color,
                  }
                : controls.applyColor === 'Icon fill color CSS var'
                ? {
                      [String(toniqIconColorCssVarNames.fillColor)]: controls.color,
                  }
                : controls.applyColor === 'Icon stroke color CSS var'
                ? {
                      [String(toniqIconColorCssVarNames.strokeColor)]: controls.color,
                  }
                : controls.applyColor === 'CSS color property'
                ? {
                      color: controls.color,
                  }
                : {};

        return (
            <section key={categoryName}>
                <h3
                    style={{
                        ...cssToReactStyleObject(toniqFontStyles.h3Font),
                    }}
                >
                    {categoryName}
                </h3>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', ...colorStyles}}>
                    {iconInstances}
                </div>
            </section>
        );
    });
    return <article>{iconCategories}</article>;
};
mainStory.storyName = 'Toniq Icon';
