/* eslint-env node */
import * as path from 'path';
import * as glob from 'glob';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { type Configuration as WebpackConfiguration, EnvironmentPlugin } from 'webpack';

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
  filename: "[name]"
};

const config: WebpackConfiguration = {
  mode: isProd ? 'production' : 'development',
  externals: /^@console\//i, // don't try to resolve @console/(internal | shared ...) libs
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
              configFile: pathTo('tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.s?(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2?|ttf|eot|otf)(\?.*$|$)/,
        type: 'asset/resource',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin({
      DATA_SOURCE: 'remote',
      BRAND_TYPE: 'Konveyor',
      NAMESPACE: 'konveyor-forklift',
      NODE_ENV: isProd ? 'production' : 'development',
      PLUGIN_NAME: 'forklift-console-plugin',
    }),
  ],
  devtool: 'source-map',
};

export default config;
