const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require('path');

const dp_web = {
    entry: './src/index.ts',
    output: {
        filename: 'dynamic-paginator.js',
        path: path.resolve(__dirname, `dist`),
        library : {
            name:"DynamicPaginator",
            type: 'var',
            export: 'default',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    target:"web",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".scss", ".css"],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    mode:"production"
};

const dp_web_min = {
    entry: './src/index.ts',
    output: {
        filename: 'dynamic-paginator.min.js',
        path: path.resolve(__dirname, `dist`),
        library : {
            name:"DynamicPaginator",
            type: 'var',
            export: 'default',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    target:"web",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".scss", ".css"],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserPlugin()
    ],
    mode:"production"
};

module.exports = [ dp_web, dp_web_min ];