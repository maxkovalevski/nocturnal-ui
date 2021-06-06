import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import postcssImport from 'postcss-import';

import path from 'path';


import pkg from './package.json';

export default {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()]
      },
      {
        file: pkg.module,
        format: "esm"
      }
    ],
    plugins: [
        postcss({
        extract: path.resolve('lib/nocturnal-ui.css'),
        modules: true,
        minimize: true,
        namedExports: true,
        plugins: [postcssImport()]
      }), resolve(), commonjs(), typescript()]
  };