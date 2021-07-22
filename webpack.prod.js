const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {


    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
            
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },            
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
              
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],        
      },

        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                //filename: 'indexCACA.html'
            }),
            new MiniCssExtractPlugin({
                //template: './src/index.html',
                filename: '[name].[fullhash].css',
                ignoreOrder: false,
            }),
            new CopyPlugin({
                patterns: [
                  { from: "src/assets/", to: "assets/" },                  
                ],
              }),

        ]

    }