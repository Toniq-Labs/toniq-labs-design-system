const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '.storybook-dist',
        '*.otf',
        '/graphics/',
    ],
    words: [
        ...baseConfig.words,
        'dfinity',
        'distrikt',
        'dscvr',
        // for svgo plugin names
        'elems',
        'listbox',
        'nftgeek',
        'tablist',
        'toniq',
    ],
};
