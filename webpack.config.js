var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
        ],
        externals: {
            jquery: 'jQuery'
        },
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
            })
        ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
  resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            appStyles: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                presets: ['react', 'es2015', 'stage-0']
                },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
           ]
    },
    devtool: 'eval-source-map'
};