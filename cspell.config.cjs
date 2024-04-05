const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        '.storybook-dist',
        '*.otf',
        '/graphics/',
        './.github/CODEOWNERS',
    ],
    words: [
        ...baseConfig.words,
        'bioniq',
        'dfinity',
        'distrikt',
        'dscvr',
        'elems',
        'listbox',
        'nftgeek',
        'tablist',
        'toniq',
        'CODEOWNERS',
        'Unisat',
        'unisat',
        'Xverse',
        'xverse',
    ],
};
