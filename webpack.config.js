/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-24 10:20:20
 * @version $Id$
 */
var path = require('path');
var webpack = require('webpack');
var cleanWebpackPlugin =  require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var paths = {
	app: ['./app/src/index.js'],
	angular: './app/src/lib/bower_components/angular/angular',
	entryTwo: './app/src/say/entry2',
	build: path.join(__dirname,'./app/build'),
}
var common = {
	//page entry,file to be load
	// entry: paths.app,
	//multiple entrye
	entry: {
		app: paths.app,
		angular: paths.angular,
		entry: paths.entryTwo
	},
	output:{
		path: paths.build,
		filename: '[name].js',
		chunkFilename: '[id].bondle.js',//here id is 1,2,3,4,5
		sourceMapFilename:'[file].map',//The filename of the SourceMaps for the JavaScript files.
		devtoolModuleFilenameTemplate:'webpack:///[resource-path]?[loaders]'
		//Filename template string of function for the sources array in a generated SourceMap.
	},
	module:{
		loaders:[{
			// test: /\.css?$/,
			// loader: 'style-loader!css-loader',
			//when want to apart css file
			test: /\.css$/, 
			loader: ExtractTextPlugin.extract("style-loader","css-loader")
		},{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			//pass parameter to loaders
			query: {
				presets: ['es2015']
			}
		}]
	},
	resolve:{
		extensions: ['','.js','.jsx']
	},
	plugins: [
		//remove dir before compile
		new cleanWebpackPlugin(['./app/build'],{
			"root": __dirname,//[location of webpack.config]", An absolute path for the root.
			//sometimes depart the plugin file
			"verbose": true,//Write logs to console.
			"dry": false,
			//"exclude": []files not move
		}),
		new ExtractTextPlugin("styles.css"),
		new HtmlWebpackPlugin({
			title: 'my webpack Excecise',
			filename: 'example.html',
			//use hash for script and css file for cache
			hash: true
		}),
		new CopyWebpackPlugin([{
			from: __dirname + '/app/src/imgs',
			to: __dirname + '/app/build/imgs'
		}]),
		//chunk name,chunk file name, atract common chunk's file
		//it will extract the common part in the array,every item
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js',['app','entry'])
	],
	wacth: true
}
module.exports = common;