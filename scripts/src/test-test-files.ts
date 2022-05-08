import {awaitedForEach, combineErrors, extractErrorMessage} from 'augment-vir';
import {runShellCommand} from 'augment-vir/dist/cjs/node-only';
import {readdir, unlink} from 'fs/promises';
import {join, relative} from 'path';
import {repoRootDir, testFilesDir} from './common/file-paths';
import {insertPreInstallScript, removePreInstallScript} from './publishing';

async function runTests(tarFullPath: string) {
    const testDirNames = await readdir(testFilesDir);
    const errors: Error[] = [];
    await awaitedForEach(testDirNames, async (testDirName) => {
        try {
            const testDirPath = join(testFilesDir, testDirName);
            const tarPath = relative(testDirPath, tarFullPath);
            await runShellCommand('npm uninstall @toniq-labs/design-system', {
                cwd: testDirPath,
                rejectOnError: true,
            });
            await runShellCommand(`npm install ${tarPath}`, {
                cwd: testDirPath,
                rejectOnError: true,
            });
            await runShellCommand(`npm i`, {
                cwd: testDirPath,
                rejectOnError: true,
            });

            const results = await runShellCommand('npm test', {
                cwd: testDirPath,
                rejectOnError: true,
                hookUpToConsole: true,
            });

            if (results.exitCode === 0) {
                await runShellCommand('npm run format', {
                    cwd: testDirPath,
                    rejectOnError: true,
                });
                console.info(`\x1b[32m${testDirName} passed.\x1b[0m`);
            }
        } catch (error) {
            errors.push(new Error(extractErrorMessage(error)));
        }
    });

    if (errors.length) {
        throw combineErrors(errors);
    }
}

async function main() {
    await removePreInstallScript();
    let tarPath = '';
    try {
        await runShellCommand(`npm run build`, {
            cwd: repoRootDir,
            rejectOnError: true,
            hookUpToConsole: true,
        });
        const results = await runShellCommand(`npm pack`, {
            cwd: repoRootDir,
            rejectOnError: true,
        });
        const tarName = results.stdout.match(/\n([^\n]+\.tgz)[\s]*$/)?.[1];
        if (!tarName) {
            throw new Error(`Could not extract tar from ${results.stdout}`);
        }
        tarPath = join(repoRootDir, tarName);
        await runTests(tarPath);
    } catch (error) {
        throw error;
    } finally {
        if (tarPath) {
            await unlink(tarPath);
        }
        await insertPreInstallScript();
    }
}

if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
