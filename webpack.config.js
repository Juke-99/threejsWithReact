const { resolve } = require('path')

module.exports = {
    mode: 'development',
    context: resolve(__dirname, 'src'),
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ],
                exclude: /node_modules/
            },
        ],
    },
}