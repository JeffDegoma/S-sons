const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


let config = {
    entry: './src/index.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, './public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
        alias: {
          images: path.resolve(__dirname, 'src/assets/images') 
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
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
      inline: true,
      open: true,
      host: '0.0.0.0'
    },
    devtool: 'inline-source-map'
}

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