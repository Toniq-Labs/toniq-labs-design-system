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
        'bitfinity',
        'CODEOWNERS',
        'dfinity',
        'distrikt',
        'dscvr',
        'elems',
        'listbox',
        'nftgeek',
        'popovertarget',
        'tablist',
        'toniq',
        'Unisat',
        'unisat',
        'Xverse',
        'xverse',
    ],
};
