const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

module.exports = {
  mode: 'production',
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new HtmlInlineScriptPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        loader: false,
        minimizer: {
          // Implementation
          implementation: ImageMinimizerPlugin.imageminMinify,
          // Options
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
      }),
      new HtmlMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        type: "asset/inline",
      },
    ]
  }
};
