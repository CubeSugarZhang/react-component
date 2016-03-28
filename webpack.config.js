var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./demo/entre.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'demo.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ],
    module: {
        loaders: [
        	{ 
            	test: /\.less$/,
            	loader: "style!css!less" 
            }, { 
            	test: /\.css$/,
            	loader: "style!css" 
            },	{ 
            	test: /\.js$/,
	            exclude: /(node_modules|bower_components)/,
            	loader: "babel" 
            }, {
	            test: /\.jsx?$/,
	            exclude: /(node_modules|bower_components)/,
	            loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    },
    
};