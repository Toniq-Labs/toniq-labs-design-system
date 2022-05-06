import {extractErrorMessage} from 'augment-vir';
import {
    NotUpToDateError,
    parseUpdateExportsArgs,
    UpdateExportsConfig,
} from './common/update-exports';
import {updateComponentExports} from './update-component-exports';
import {updateIconExports} from './update-icon-exports';

const updateExportsConfigs: UpdateExportsConfig[] = [
    updateIconExports,
    updateComponentExports,
];

async function main() {
    const args = parseUpdateExportsArgs();
    const didSucceed: boolean[] = await Promise.all(
        updateExportsConfigs.map(async (updateExportsConfig): Promise<boolean> => {
            try {
                await updateExportsConfig.executor(args);
                return true;
            } catch (caughtError) {
                if (caughtError instanceof NotUpToDateError) {
                    const errorMessage = extractErrorMessage(caughtError);
                    console.error(errorMessage);
                    return false;
                } else {
                    throw caughtError;
                }
            }
        }),
    );

    const someFailed = didSucceed.some((result) => !result);

    if (someFailed) {
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
