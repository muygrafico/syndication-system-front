    const path = require('path')
    const HtmlWebPackPlugin = require('html-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const Dotenv = require('dotenv-webpack')
    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
              'eslint-loader'
            ]
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.scss$/,
              use: [
                  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader', // translates CSS into CommonJS
                  'sass-loader' // compiles Sass to CSS, using Node Sass by default
              ]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      },
      devServer: {
        historyApiFallback: true
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new Dotenv()
      ]
    }
