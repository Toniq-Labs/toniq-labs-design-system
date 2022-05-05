import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';

const themeConfig = create({
    base: 'light',

    colorPrimary: 'white',
    colorSecondary: '#09d8aa',

    brandTitle: 'Entrepot',
    brandImage: './logo.png',
});

addons.setConfig({
    theme: themeConfig,
});
