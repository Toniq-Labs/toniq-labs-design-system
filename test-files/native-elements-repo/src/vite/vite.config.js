'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const path_1 = require('path');
const always_reload_plugin_1 = require('./always-reload-plugin');
const viteConfig = {
    clearScreen: false,
    plugins: [(0, always_reload_plugin_1.alwaysReloadPlugin)()],
    rootDir: (0, path_1.dirname)(__dirname),
};
exports.default = viteConfig;
