const path = require('path');
const globalCSS = ['./src/assets/styles/main.scss'];

module.exports = {
    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.dirname(path.resolve(__dirname));
        config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets/');

        config.module.rules.push({
            test: /\.scoped\.(sc|c|sa)ss$/,
            include: path.resolve(__dirname, '../'),
            use: [
                'style-loader',
                'css-loader',
                'scoped-css-loader',
                'sass-loader',
                {
                    loader: 'style-resources-loader',
                    options: {
                        patterns: globalCSS,
                    },
                },
            ],
        });

        return config;
    },
};
