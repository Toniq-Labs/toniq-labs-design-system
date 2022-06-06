import {mapObject, safeMatch} from 'augment-vir';
import {runShellCommand} from 'augment-vir/dist/cjs/node-only';
import {readFile} from 'fs/promises';
import {cliColors} from './common/cli-colors';
import {gitHubWorkflowFilePaths, netlifyConfigPath} from './common/file-paths';

async function getCurrentNodeVersion(): Promise<string> {
    const results = await runShellCommand('node -v');
    const version = results.stdout.trim().replace(/^v/, '');
    return version;
}

async function getNetlifyNodeVersion(): Promise<string> {
    const netlifyConfigContents = (await readFile(netlifyConfigPath)).toString();
    const nodeVersionString = safeMatch(netlifyConfigContents, /NODE_VERSION = "([^"]+)"/)[1];
    if (!nodeVersionString) {
        throw new Error(`Could not find node version from netlify config.`);
    }

    return nodeVersionString;
}

function extractGitHubActionsNodeVersion(workflowContents: string): string[] {
    const versionsString = Array.from(
        workflowContents.matchAll(/node-version:\s+((?:\[|').+)\s*\n/g),
    ).map((matchArray) => matchArray[1]);

    if (!versionsString.length) {
        throw new Error(`Failed to extract versions strings from workflowContents.`);
    }

    const parsedVersions: string[] = versionsString
        .map((versionString) => JSON.parse(String(versionString).replace(/'/g, '"')))
        .flat();

    if (!parsedVersions.length) {
        throw new Error(`Empty version parsed from workflowContents.`);
    }

    if (typeof parsedVersions === 'string') {
        return [parsedVersions];
    } else if (Array.isArray(parsedVersions)) {
        return parsedVersions;
    } else {
        throw new Error(`Incorrect parsed result from workflowContents.`);
    }
}

async function getGitHubActionsNodeVersions(): Promise<string[]> {
    const versions: string[] = Object.values(
        await mapObject(gitHubWorkflowFilePaths, async (key, path) => {
            let fileContents: string;
            try {
                fileContents = (await readFile(path)).toString();
            } catch (error) {
                console.error(
                    `${cliColors.red}Failed to read contents for ${key} GitHub workflow file.${cliColors.reset}`,
                );
                throw error;
            }
            try {
                return extractGitHubActionsNodeVersion(fileContents);
            } catch (error) {
                console.error(
                    `${cliColors.red}Failed to extract versions from ${key} GitHub workflow file.${cliColors.reset}`,
                );
                throw error;
            }
        }),
    ).flat();

    return versions;
}

async function ensureMatchingNodeVersions() {
    const versionCallbacksByKey = {
        gitHubWorkflows: getGitHubActionsNodeVersions,
        netlifyConfig: getNetlifyNodeVersion,
        environment: getCurrentNodeVersion,
    } as const;

    const keyedVersions: Record<keyof typeof versionCallbacksByKey, string | string[]> =
        await mapObject(versionCallbacksByKey, async (key, callback) => {
            const versions: string | string[] = await callback();
            return Array.isArray(versions) ? versions.flat() : versions;
        });

    const allVersions = new Set<string>(Object.values(keyedVersions).flat());

    if (allVersions.size > 1) {
        console.error(
            `${cliColors.red}${JSON.stringify(keyedVersions, null, 4)}${cliColors.reset}`,
        );
        throw new Error(`Node version mismatch.`);
    } else {
        console.info(`${cliColors.green}All Node versions match.${cliColors.reset}`);
    }
}

ensureMatchingNodeVersions().catch((error) => {
    console.error(error);
    process.exit(1);
});
