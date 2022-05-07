import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {dirname} from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import {terser} from 'rollup-plugin-terser';
import packageJson from './package.json';

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                dir: dirname(packageJson.main),
                format: 'cjs',
                sourcemap: true,
                preserveModules: true, // Keep directory structure and files
            },
            // {
            //     dir: dirname(packageJson.module),
            //     format: 'esm',
            //     sourcemap: true,
            //     preserveModules: true, // Keep directory structure and files
            // },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'}),
            terser(),
            scss({
                prefix: `@import "./src/assets/styles/main.scss";`,
                outputStyle: 'compressed',
            }),
        ],
        external: [
            'react',
            'react-dom',
            'styled-components',
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{file: 'dist/index.d.ts', format: 'esm'}],
        plugins: [dts()],
        external: [/\.s?css$/],
    },
];
