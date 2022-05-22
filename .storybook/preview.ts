import {Parameters} from '@storybook/csf';

export const parameters: Parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
};
