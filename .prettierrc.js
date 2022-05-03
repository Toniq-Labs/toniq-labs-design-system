const {existsSync} = require('fs');
// prettier only handles posix paths
const {join} = require('path/posix');

const repoRootDir = __dirname;

const plugins = [
    'prettier-plugin-sort-json',
    'prettier-plugin-packagejson',
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-organize-imports',
    'prettier-plugin-jsdoc',
].map((pluginName) => {
    // account for installations where deps are flattened
    const defaultPath = join(repoRootDir, 'node_modules', pluginName);
    if (existsSync(defaultPath)) {
        return defaultPath;
    } else {
        // installations where they're nested
        return join(repoRootDir, 'node_modules', 'virmator', 'node_modules', pluginName);
    }
});

/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const prettierConfig = {
    arrowParens: 'always',
    bracketSpacing: false,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'ignore',
    jsonRecursiveSort: true,
    bracketSameLine: false,
    plugins,
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};

module.exports = prettierConfig;
