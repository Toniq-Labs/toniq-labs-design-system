import {runShellCommand} from 'augment-vir/dist/node-only';
import {readFile, writeFile} from 'fs/promises';
import {dirname, join, relative} from 'path';

const repoRootDir = dirname(dirname(__dirname));
const packageJsonPath = join(repoRootDir, 'package.json');
const preInstallScript = 'npx npm-force-resolutions';

async function getPackageJsonObject() {
    const packageJsonContents = JSON.parse((await readFile(packageJsonPath)).toString());
    return packageJsonContents;
}

async function writePackageJson(packageJsonContents: any) {
    await writeFile(packageJsonPath, JSON.stringify(packageJsonContents, null, 4));
    await runShellCommand(`npm run format ${relative(process.cwd(), packageJsonPath)}`, {
        rejectOnError: true,
    });
}

async function removePreInstallScript() {
    const packageJsonContents = await getPackageJsonObject();
    delete packageJsonContents.scripts.preinstall;
    await writePackageJson(packageJsonContents);
}

async function insertPreInstallScript() {
    const packageJsonContents = await getPackageJsonObject();
    packageJsonContents.scripts.preinstall = preInstallScript;
    await writePackageJson(packageJsonContents);
}

async function main() {
    const args = process.argv.slice(2);
    if (args.includes('prepublish')) {
        await removePreInstallScript();
    } else {
        await insertPreInstallScript();
    }
}

if (module === require.main) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
