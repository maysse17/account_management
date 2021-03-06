var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

// ==================== MAIN SETTINGS ====================
module.exports = {
    entry: ['babel-polyfill', './account_management/static/main.js'],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    transformToRequire: {video: 'src', source: 'src', img: 'src', image: 'xlink:href'}
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 10000, name: '[name].[hash:7].[ext]'}
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 10000, name: '[name].[hash:7].[ext]'}
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {limit: 10000, name: '[name].[hash:7].[ext]'}
            },
            {
                test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery': 'jquery/src/jquery.js'
        }
    }
}

// ==================== PRODUCTION SETTINGS ====================
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.output = {
        path: '/app/staticfiles/dist/',
        publicPath: 'http://localhost:3000/staticfiles/dist/',
        filename: 'bundle.js'
    },
    module.exports.plugins.push(
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.UglifyJsPlugin({sourceMap: true, compress: {warnings: false}}),
        new webpack.ProvidePlugin({
            Alert: "exports?Alert!bootstrap/js/dist/alert",
            Button: "exports?Button!bootstrap/js/dist/button",
            Collapse: "exports?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports?Modal!bootstrap/js/dist/modal",
            Popover: "exports?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports?Util!bootstrap/js/dist/util",
        })
    ),
    module.exports.mode = 'production'
}

// ==================== DEVELOPMENT SETTINGS ====================
if (process.env.NODE_ENV === 'development') {
    module.exports.devtool = '#eval-source-map',
    module.exports.output = {
        path: '/app/account_management/staticfiles/dist/',
        publicPath: 'http://localhost:3000/staticfiles/dist/',
        filename: 'bundle.js'
    },
    module.exports.plugins.push(
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({vue: {loader: {js: 'babel-loader'}}})
    ),
    module.exports.devServer = {
        historyApiFallback: true,
        noInfo: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        clientLogLevel: "info",
        filename: 'bundle.js',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With'
        }
    },
    module.exports.performance = {hints: false},
    module.exports.watchOptions = {poll: 1000},
    module.exports.mode = 'development'
}
