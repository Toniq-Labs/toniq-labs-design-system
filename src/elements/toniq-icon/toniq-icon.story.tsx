import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory} from '../../icons';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {toniqColors, toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqIconColorCssVarNames} from '../../styles/icon-colors';
import {ToniqIcon} from '../react-components';

const iconStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
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
    hostClass: {
        name: 'Host Class',
        control: 'select',
        options: [
            'None',
            'toniq-icon-fit-icon',
        ],
    },
    size: {
        name: 'Size (for toniq-icon-fit-icon host class)',
        control: {
            type: 'number',
            min: 1,
        },
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqIcon> = {
    title: 'Elements/Toniq Icon',
    component: ToniqIcon,
    argTypes: iconStoryControls as ArgTypes,
    args: {
        color: 'black',
        applyColor: 'CSS color property',
        hostClass: 'None',
        size: 24,
    },
    parameters: {
        actions: {
            disable: true,
        },
    },
};

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof iconStoryControls, string>) => {
    const sizeStyles =
        controls.size && controls.hostClass === 'toniq-icon-fit-icon'
            ? {
                  width: `${controls.size}px`,
                  height: `${controls.size}px`,
              }
            : {};

    const iconCategories = (
        Object.keys(allIconsByCategory) as (keyof typeof allIconsByCategory)[]
    ).map((categoryName) => {
        const iconInstances = allIconsByCategory[categoryName].map((icon) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: `1px solid ${toniqColors.divider.foregroundColor}`,
                    borderRadius: '8px',
                    padding: '8px',
                }}
                key={icon.iconName}
                title={icon.iconName}
            >
                <ToniqIcon style={{...sizeStyles}} className={controls.hostClass} icon={icon} />
                <span
                    style={{
                        color: String(toniqColors.pageTertiary.foregroundColor),
                    }}
                >
                    {icon.iconName}
                </span>
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
