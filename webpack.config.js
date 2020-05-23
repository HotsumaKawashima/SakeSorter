const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const entry = {
  production : './src/index.js',
  development: './src/index.develop.js',
}

module.exports = (env, argv) => {

  return [
    {
      entry: entry[env.mode],
      output: {
        filename: 'index.js'
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          inlineSource: 'index.js',
        }),
        new HtmlWebpackInlineSourcePlugin(),
      ]

    },

  ];
}

