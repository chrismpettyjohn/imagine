import sass from 'sass';
import jsx from 'acorn-jsx';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import frontendPackage from './package.json' assert { type: 'json' };
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
    preserveModules: false,
    input: './src/index.ts',
    output: [
        {
            dir: './dist',
            format: 'esm',
            name: 'core',
            sourcemap: false,
            inlineDynamicImports: true,
        },
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
        // Prevents peer dependencies from being bundled
        blockPeerDependencies(),

        // Resolves node_module dependencies and bundles them
        resolveDependencies({
            browser: true,
            preferBuiltins: false,
            dedupe: ['react', 'react-dom'],
        }),

        // Convert JSON into ES Modules
        json({
            compact: true,
        }),

        // Bundle CSS and SASS files
        scss({
            output: './dist/frontend.css',
            failOnError: true,
            sass,
        }),

        copy({
            targets: [
                { src: 'src/public/fonts/**/*', dest: 'dist/public/fonts' },
                { src: 'src/public/css/**/*', dest: 'dist/public/css' },
            ],
        }),

        // Bundle image files
        image(),

        // Typescript compilation
        typescript({
            rootDir: './src',
            tsconfig: './tsconfig.build.json',
        }),

        // Bundle into CommonJS format
        commonJS({
            sourceMap: false,
        }),

        // Minimize final bundle
        terser({
            compress: true,

        }),
    ],
    external: [
        ...Object.keys(frontendPackage.dependencies || {}),
        ...Object.keys(frontendPackage.peerDependencies || {}),
    ],
};
