import {awaitedForEach} from 'augment-vir/dist';
import {errorIfFailure, parseUpdateExportsArgs, UpdateExportsConfig} from './common/update-exports';
import {updateIconExports} from './update-icon-exports';

const updateExportsFunctions: UpdateExportsConfig[] = [updateIconExports];

async function main() {
    const args = parseUpdateExportsArgs();
    await awaitedForEach(updateExportsFunctions, async (updateExports) => {
        const result = await updateExports.executor(args);
        errorIfFailure(updateIconExports, result);
    });
}

if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
