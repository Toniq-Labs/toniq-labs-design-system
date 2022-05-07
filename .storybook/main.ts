import {StorybookConfig} from '@storybook/core-common';
import {dirname, resolve} from 'path';
import type {Configuration} from 'webpack';

/** These configs values are exported as individual variables to appease some storybook build warnings. */

export const stories: StorybookConfig['stories'] = [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
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

    config.module?.rules?.push({
        test: /\.scoped\.(sc|c|sa)ss$/,
        include: dirname(__dirname),
        use: [
            'style-loader',
            'css-loader',
            'scoped-css-loader',
            'sass-loader',
            {
                loader: 'style-resources-loader',
                options: {
                    patterns: ['./src/assets/styles/main.scss'],
                },
            },
        ],
    });

    config.resolve!.roots = [
        // Fixes for unresolved assets from within css/scss at build time https://github.com/storybookjs/storybook/issues/12844#issuecomment-970088820
        resolve(__dirname, '../public'),
        'node_modules',
    ];

    return config;
};

export const features: StorybookConfig['features'] = {
    /** Decrease bundle size */
    storyStoreV7: true,
    postcss: false,
};
