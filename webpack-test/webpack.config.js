/**
 * Created by Administrator on 2016/8/26.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'eval-source-map',  // 生成Source Map,生产环境记得关闭
    entry:__dirname + '/app/main.js',
    output:{
        path: __dirname + '/public',
        filename:"[name]-[hash].js"
        
    },
    module:{
        loaders:[
            {test:/\.json$/,loader:'json'},
            {
                test:/\.js[x]?$/, 
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react'],
                    "env":{
                        "development":{

                        }
                    }
                }
            },
            { 
                test:/\.css$/,
                loader:ExtractTextPlugin.extract("style","style!css?modules") //css只作用于当前模块
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
        
    ],
    devServer:{
        contentBase:"./public",//提供本地服务的目录
        colors:true,  //输出就结果为彩色
        historyApiFallback:true,  //不跳转
        inline:true,  //实时刷新
        hot:true,
        port:'9090'
    
    }
};