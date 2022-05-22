import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {Copy16Icon, Icp16Icon} from '../../icons';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqChip, ToniqIcon} from '../react-components';

const componentStoryMeta: ComponentMeta<typeof ToniqChip> = {
    title: 'Elements/Toniq Chip',
    component: ToniqChip,
    parameters: {
        actions: {
            disabled: true,
        },
    },
};

export default componentStoryMeta;

export const mainStory = () => {
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
                        className={className}
                        text={'with increased spacing'}
                        icon={Icp16Icon}
                        style={{
                            gap: '8px',
                            paddingRight: '12px',
                            paddingLeft: '12px',
                        }}
                    />
                </div>
            </>
        );
    }
    return (
        <>
            {generateSection('Primary')}
            {generateSection('Secondary', 'toniq-chip-secondary')}
        </>
    );
};
mainStory.storyName = 'Toniq Chip';
