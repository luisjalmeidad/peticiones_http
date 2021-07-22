const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {


    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true
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
              
        ]
    },

        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                //filename: 'indexCACA.html'
            }),
            new MiniCssExtractPlugin({
                //template: './src/index.html',
                filename: '[name].css',
                ignoreOrder: false,
            }),
            new CopyPlugin({
                patterns: [
                  { from: "src/assets/", to: "assets/" },                  
                ],
              }),

        ]

    }