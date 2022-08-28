import path from 'path';
import jsx from 'acorn-jsx';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import themesPackage from './package.json';
import {terser} from 'rollup-plugin-terser';
import commonJS from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolveDependencies from '@rollup/plugin-node-resolve';
import blockPeerDependencies from 'rollup-plugin-peer-deps-external';

export default {
  preserveModules: false,
  input: './src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs',
      sourcemap: false,
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

    // // Bundle CSS and SASS files
    scss({
      output: './dist/public/css/roleplay-theme.css',
      failOnError: true,
      includePaths: ['node_modules/'],
      sass: require('sass'),
      importer(url /*, prev */) {
        // E.g. @import '~ckeditor5-theme-lark/theme/theme.scss';
        // See https://github.com/jtangelder/sass-loader#imports
        if (url.startsWith('~')) {
          const filePath = path.resolve('node_modules', url.slice(1));

          return {
            file: filePath,
          };
        }
      },
    }),

    copy({
      targets: [
        {src: 'src/public/css/*.css', dest: 'dist/public/css'},
        {src: 'src/public/img/**/*', dest: 'dist/public/img'},
        {src: 'src/public/fonts/**/*', dest: 'dist/public/fonts'},
      ],
    }),

    image({
      dom: true,
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
    ...Object.keys(themesPackage.dependencies || {}),
    ...Object.keys(themesPackage.peerDependencies || {}),
  ],
};
