import {StorybookConfig} from '@storybook/core-common';
import type {Configuration} from 'webpack';

/** These configs values are exported as individual variables to appease some storybook build warnings. */

export const stories: StorybookConfig['stories'] = [
    '../src/**/*.stories.@(ts|tsx)',
];
export const addons: StorybookConfig['addons'] = [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
];
export const framework: StorybookConfig['framework'] = '@storybook/react';

export const staticDirs: StorybookConfig['staticDirs'] = ['../public'];

export const webpackFinal: StorybookConfig['webpackFinal'] = (config: Configuration) => {
    const maxAssetSize = 1024 * 1024;

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
    postcss: false,
};
