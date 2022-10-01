import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory, Copy16Icon} from '../../icons';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqChip, ToniqIcon} from '../react-components';

const chipStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
    text: {
        name: 'Text',
        control: 'text',
    },
    iconName: {
        name: '16px Icon',
        control: 'select',
        options: [
            'None',
            ...allIconsByCategory['core-16'].map((icon) => icon.iconName),
        ],
    },
    className: {
        name: 'Host class',
        control: 'select',
        options: [
            'None',
            'toniq-chip-secondary',
        ],
    },
    icon: {
        table: {
            disable: true,
        },
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqChip> = {
    title: 'Elements/Toniq Chip',
    component: ToniqChip,
    argTypes: chipStoryControls,
    parameters: {
        actions: {
            disable: true,
        },
    },
    args: {
        text: 'Custom text here',
        iconName: 'None',
        className: 'None',
    },
};

export default componentStoryMeta;

export const mainStory = (controls: Record<keyof typeof chipStoryControls, string>) => {
    function generateSection(heading: string, className: string = '') {
        return (
            <>
                <h3
                    style={{
                        ...cssToReactStyleObject(toniqFontStyles.h3Font),
                    }}
                >
                    {heading}
                </h3>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        flexWrap: 'wrap',
                    }}
                >
                    <ToniqChip className={className}>inner HTML</ToniqChip>
                    <ToniqChip className={className}>
                        <ToniqIcon icon={Copy16Icon} />
                        inner HTML with icon
                    </ToniqChip>
                    <ToniqChip className={className} text={'with text input'} />
                    <ToniqChip
                        className={className}
                        text={'with text and icon inputs'}
                        icon={Copy16Icon}
                    />
                    <ToniqChip
                        style={{width: '200px'}}
                        className={className}
                        text={'with custom size'}
                        icon={Copy16Icon}
                    />
                </div>
            </>
        );
    }

    const customIcon = allIconsByCategory['core-16'].find(
        (icon) => icon.iconName === controls.iconName,
    );

    return (
        <>
            {generateSection('Primary')}
            {generateSection('Secondary', 'toniq-chip-secondary')}
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>

            <ToniqChip className={controls.className} text={controls.text} icon={customIcon} />
        </>
    );
};
mainStory.storyName = 'Toniq Chip';
