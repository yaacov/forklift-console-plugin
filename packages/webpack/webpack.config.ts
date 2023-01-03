/* eslint-env node */
import * as path from 'path';
import * as glob from 'glob';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { type Configuration as WebpackConfiguration, EnvironmentPlugin } from 'webpack';

import nodeExternals from "webpack-node-externals";

const isProd = process.env.NODE_ENV === 'production';
const pathTo = (relativePath: string) => path.resolve(__dirname, relativePath);

/**
 * get all index ts files
 */
const entry = glob.sync('./src/**/index.ts').reduce(function(obj, el){
    const dir = path.parse(el).dir;
    const outDir = dir.slice(5) // remove `./src` directory
    const name = path.parse(el).name;
    
    obj[path.join(outDir, name + '.js')]= el;
    return obj
},{});

/**
 * get all ts files
 */
const output = {
  path: path.resolve(__dirname, './dist'),
  filename: '[name]',
};

const config: WebpackConfiguration = {
  mode: isProd ? 'production' : 'development',
  externalsPresets: { node: true },
  externals: [
    '@openshift-console/dynamic-plugin-sdk-webpack',
    '@openshift/dynamic-plugin-sdk',
    '@openshift/dynamic-plugin-sdk-webpack',
    'webpack', // don't try to resolve webpack
    nodeExternals() // we use node modules 'fs', 'path' etc...
  ],
  context: pathTo('./'),
  entry: entry,
  output: output,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: pathTo('./tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
};

export default config;
