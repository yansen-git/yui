// 解析vue文件，vue2.x使用5.x版本 vue3使用6.x版本
import vue from 'rollup-plugin-vue';
// 解析TS文件
import typescript from 'rollup-plugin-typescript2';
// 帮助 rollup 识别外部模块
import nodeResolve from 'rollup-plugin-node-resolve';
// 解析json文件
import json from 'rollup-plugin-json';
// babel插件 将es6+转为es5
import { babel } from '@rollup/plugin-babel';
// 压缩代码
import { terser } from 'rollup-plugin-terser';
// 直接复制静态文件
import copy from 'rollup-plugin-copy';
// 将commonjs模块转为es模块
import commonjs from '@rollup/plugin-commonjs';
// 识别图片文件
import image from '@rollup/plugin-image';
// 识别css和预处理文件
import postcss from 'rollup-plugin-postcss';
// 识别svg文件
import svg from 'rollup-plugin-svg';
// 这里用来识别字体
import url from 'rollup-plugin-url';
// 支持 require.context 语法
import requireContext from 'rollup-plugin-require-context';
import sass from 'node-sass';
export default {
  input: './packages/index.ts',
  output: {
    file: 'lib/index.js',
    name: 'yui',
    format: 'umd',
    globals: {
      vue: 'Vue',
    },
    inlineDynamicImports: true,
    exports: 'named',
  },
  plugins: [
    nodeResolve(),
    copy({
      targets: [{ src: 'public/static/*', dest: 'lib/static' }],
    }),
    json(),
    postcss({
      extract: true,
      minimize: true, // 生产环境开启压缩
      extensions: ['.css', '.scss'], // 识别css和scss文件
      // 在打包过程中需要配合 node-sass 使用
      process: function (context) {
        return new Promise((resolve, reject) => {
          sass.render(
            {
              file: context,
            },
            function (err, result) {
              if (!err) {
                resolve(result);
              } else {
                reject(err);
              }
            }
          );
        });
      },
    }),
    url({
      // 打包字体为base64
      include: ['**/*.woff', '**/*.ttf'],
      limit: Infinity,
    }),
    image(),
    svg(),
    requireContext(),
    vue({
      include: /\.vue$/,
      css: true,
      compileTemplate: true,
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          paths: {
            '@/*': ['packages/*'],
          },
        },
        include: ['packages/**/*.ts', 'packages/**/*.tsx', 'packages/**/*.vue'],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    commonjs({
      sourceMap: false,
    }),
    terser(),
  ],
  external: ['vue', /@babel\/runtime/],
};
