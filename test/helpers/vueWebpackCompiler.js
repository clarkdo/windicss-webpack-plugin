const path = require("path");
const webpack = require("webpack");
const WebpackWindiCSSPlugin = require ('../../dist').default
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (config = {}) => {
  const root = path.dirname(__dirname)
  return webpack({
    entry: `./fixtures/vue.js`,
    context: root,
    mode: 'development',
    devtool: false,
    output: {
      path: path.join(root, '/dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  indentedSyntax: true
                }
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.styl(us)?$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'stylus-loader'
          ]
        },
      ]
    },
    plugins: [
      new WebpackWindiCSSPlugin({
        scan: {
          dirs: ['fixtures']
        }
      }),
      new VueLoaderPlugin()
    ],
    ...config,
  });
}
