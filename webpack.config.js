const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


// takes entry point and an output which takes an object
let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
        alias: { // Create aliases
          images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
             {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader',
                    {
                    loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                              progressive: true,
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            optipng: {
                              optimizationLevel: 4,
                            },
                            pngquant: {
                              quality: '75-90',
                              speed: 3,
                            },
                        },
                    }
                ],
                exclude: /node_modules/,
                include: __dirname,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader",
                  ]
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          }),
          new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: '[id].css',
          }),
    ],

    devServer: {
      contentBase: path.join(__dirname, './public'),
      historyApiFallback: true,
      inline: true,
      open: true,
      host: '0.0.0.0'
    },
    devtool: 'eval-source-map'
}

//here we export the config object
module.exports = config;


if(process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "styles.css",
        })
    )
}