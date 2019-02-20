const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');



//4 Core concepts - Entry, Output, Loaders, Plugins

//#Entry - 

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
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'sass-loader'],
                    fallback: 'style-loader'     
                }))
            }
        ]

    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
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
        new OptimizeCssAssetsWebpackPlugin()
    )
}