import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';
import Logo from '../src/storybook/assets/logo.png';

const themeConfig = create({
    base: 'light',

    colorPrimary: 'white',
    colorSecondary: '#09d8aa',

    brandTitle: 'Entrepot',
    brandImage: Logo,
});

addons.setConfig({
    theme: themeConfig,
});
