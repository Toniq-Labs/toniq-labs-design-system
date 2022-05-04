import {StorybookConfig} from '@storybook/core-common';

export const stories: StorybookConfig['stories'] = [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
];
export const addons: StorybookConfig['addons'] = [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
];
export const framework: StorybookConfig['framework'] = '@storybook/react';

const maxAssetSize = 1024 * 1024;

export const webpackFinal: StorybookConfig['webpackFinal'] = (config) => {
    config.optimization = {
        ...config.optimization,
        splitChunks: {
            ...config.optimization?.splitChunks,
            chunks: 'all',
            minSize: 30 * 1024,
            maxSize: maxAssetSize,
        },
    };
    config.performance = {
        ...config.performance,
        maxAssetSize: maxAssetSize,
    };

    return config;
};

export const features: StorybookConfig['features'] = {
    /** Decrease bundle size */
    storyStoreV7: true,
};
