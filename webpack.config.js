const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .jsx or .js
                use: ["babel-loader"],
                include: path.resolve(__dirname, "./src")
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        /* Enable webpack's Hot Module Replacement feature:
         * Link: https://webpack.js.org/configuration/dev-server/#devserverhot
         */
        hot: true
    },
    devtool: "inline-source-map"

};