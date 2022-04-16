import {join} from 'path';
import {InitialOptionsTsJest} from 'ts-jest';

const cwd = process.cwd();

export const virmatorJestConfig: InitialOptionsTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: cwd,
    modulePathIgnorePatterns: ['.*.type.test.ts$'],
    roots: [join(cwd, 'src')],
    setupFilesAfterEnv: [join(__dirname, 'jest-setup.ts')],
    globals: {
        'ts-jest': {
            tsconfig: join(cwd, 'tsconfig.json'),
            diagnostics: {
                warnOnly: true,
                ignoreCodes: ['TS151001'],
            },
        },
    },
    moduleNameMapper: {
        '.scoped.(sc|c|sa)ss$': '<rootDir>/test/unit/stubs/style.js',
    },
};

export default virmatorJestConfig;
