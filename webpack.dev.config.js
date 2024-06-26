const path = require('path');

const dp_dev = {
    entry: './src/index.ts',
    output: {
        filename: 'dynamic-paginator.js',
        path: path.resolve(__dirname, 'dist'),
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
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    target:"node",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".scss", ".css"],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    optimization: {
        minimize: true,
    },
    mode:"development"
};

module.exports = dp_dev;

/*
npx webpack --config=webpack.dev.config.js --watch
*/