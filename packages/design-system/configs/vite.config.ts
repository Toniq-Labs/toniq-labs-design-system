import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: true}, (baseConfig) => {
    return baseConfig;
});
