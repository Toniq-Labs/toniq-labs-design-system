import React from 'react';
import {Copy16Icon} from '../../icons/svgs/core16/copy16.icon';
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
