import {dirname} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
import {getWebTestRunnerConfigWithCoveragePercent} from 'virmator/base-configs/base-web-test-runner.mjs';

const baseConfig = getWebTestRunnerConfigWithCoveragePercent({
    coveragePercent: 100,
    packageRootDirPath: dirname(dirname(fileURLToPath(import.meta.url))),
    extraScreenshotOptions: {},
});

/** @type {import('@web/test-runner').TestRunnerConfig} */
const webTestRunnerConfig = {
    ...baseConfig,
};

export default webTestRunnerConfig;

// check if the current file is being run directly as a script
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    console.info(JSON.stringify(webTestRunnerConfig, null, 4));
}
