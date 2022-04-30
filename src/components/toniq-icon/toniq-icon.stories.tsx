import React from 'react';
import {allIcons} from '../../icons/all-icons';
import {Copy16Icon} from '../../icons/svgs/core-16/copy-16.icon';
import {toniqSvgColorCssVarName} from '../../icons/toniq-svg-colors';
import {ToniqIcon} from './toniq-icon';

export default {
    title: 'Design System/Toniq Icon',
    component: ToniqIcon,
};

export const WithIcon = () => <ToniqIcon icon={Copy16Icon} />;

export const WithCSSColor = () => (
    <div style={{color: 'blue'}}>
        <ToniqIcon icon={Copy16Icon} />
    </div>
);

export const WithCSSVarColor = () => (
    <div style={{[toniqSvgColorCssVarName]: 'orange'}}>
        <ToniqIcon icon={Copy16Icon} />
    </div>
);

export const WithAllIcons = () => {
    const iconCategories = (Object.keys(allIcons) as (keyof typeof allIcons)[]).map(
        (categoryName) => {
            const iconInstances = allIcons[categoryName].map((icon) => <ToniqIcon icon={icon} />);

            return (
                <section style={{fontFamily: 'sans-serif'}}>
                    <h3>{categoryName}</h3>
                    <div style={{display: 'flex', gap: '8px'}}>{iconInstances}</div>
                </section>
            );
        },
    );
    return (
        <div style={{display: 'flex', gap: '16px', flexDirection: 'column'}}>{iconCategories}</div>
    );
};
