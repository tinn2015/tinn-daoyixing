const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({size:10})

module.exports = {
	entry:[
		'./app/main.js',
		'webpack-dev-server/client?http://localhost:8080'
	],
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js',
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'happypack/loader?id=js',
			},
			{
				test:/\.css/,
				loader:'style!css!postcss'
			},
			{
				test:/\.(png|jpg)?limit=8192/,
				loader:'url-loader'
			}
		]
	},
	postcss:[ autoprefixer({browsers:['last 2 versions']}) ],//install postcss-loader  autoprefixer
	devtool: 'cheap-source-map',
	devServer:{
		contentBase:'./app/',
		publicPath:'/assets/',
		colors:true,
		hot:true,
		inline:true,
		historyApiFallback:true,   //启用HTML5  history api
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HappyPack({
			id:'js',
			loaders:['babel'],
			threadPool:happyThreadPool,
		}),
		 new webpack.NoErrorsPlugin()
		
	]
}
