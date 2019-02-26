const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


let config = {
    entry: './src/index.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, './public')
    },
    resolve: {
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
                loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]',
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
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
            }
        ]

    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'styles.css'}),
    ],

    devServer: {
      contentBase: path.join(__dirname, './public'),
      historyApiFallback: true,
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
        new OptimizeCssAssetsWebpackPlugin()
    )
}