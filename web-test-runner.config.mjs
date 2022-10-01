import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
    files: [
        './src/**/*.test.ts',
    ],
    plugins: [esbuildPlugin({ts: true})],
    // 2 minutes cause GitHub Actions be blow
    browserStartTimeout: 120000,
    nodeResolve: true,
    testFramework: {
        config: {
            // // uncomment for debugging
            // timeout: 100000,
        },
    },
};
