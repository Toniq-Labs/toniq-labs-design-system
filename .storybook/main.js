const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scoped\.(sc|c|sa)ss$/,
            include: path.resolve(__dirname, '../'),
            use: [
                'style-loader',
                'css-loader',
                'scoped-css-loader',
                'sass-loader',
            ],
        });

        return config;
    },
};
