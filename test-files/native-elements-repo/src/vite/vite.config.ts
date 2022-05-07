import {dirname} from 'path';
import {alwaysReloadPlugin} from './always-reload-plugin';

const viteConfig = {
    clearScreen: false,
    plugins: [alwaysReloadPlugin()],
    rootDir: dirname(__dirname),
};

export default viteConfig;
