const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:[
        './app/main.js',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:'babel'
            },{
                test:/\.css$/,
                loader:'style!css'
            },{
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }
            ],

        },

        devtool:'source-map',
        devServer:{
            contentBase:'./app/',
            publicPath:'/assets/',
            hot: true,
            inline: true,
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ],
};
