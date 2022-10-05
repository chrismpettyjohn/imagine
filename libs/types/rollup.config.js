import {terser} from 'rollup-plugin-terser';
import interfacePackage from './package.json';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'umd',
      name: 'interface',
      sourcemap: false,
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    // Prevents peer dependencies from being bundled
    blockPeerDependencies(),

    // Resolves node_module dependencies and bundles them
    resolveDependencies({
      preferBuiltins: true,
    }),

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
      output: {
        comments: false,
      },
      mangle: true,
      keep_classnames: false,
      keep_fnames: false,
    }),
  ],
  external: [
    ...Object.keys(interfacePackage.dependencies || {}),
    ...Object.keys(interfacePackage.peerDependencies || {}),
  ],
};
