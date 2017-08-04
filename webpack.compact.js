require( "graceful-fs" ).gracefulify( require( "fs" ) );

const nchunk = require( "nchunk" );
const path = require( "path" );
const plough = require( "plough" );
const webpack = require( "webpack" );

const BowerResolvePlugin = require( "bower-resolve-webpack-plugin" );
const BundleAnalyzerPlugin = require( "webpack-bundle-analyzer" ).BundleAnalyzerPlugin;
const DefinePlugin = webpack.DefinePlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = function build( parameter ){
	parameter = parameter || { };

	return {
		"entry": "./prompt.module.jsx",

		"resolve": {
			"descriptionFiles": [
				"package.json",
				"bower.json"
			],
			"modules": [
				"node_modules",
				"bower_components"
			],
			"mainFields": [
				"support",
				"browser",
				"module",
				"main"
			],
			"plugins": [ new BowerResolvePlugin( ) ]
		},

		"output": {
			"library": "prompt",
			"libraryTarget": "umd",
			"filename": "prompt.deploy.js"
		},

		"module": {
			"rules": [
				{
					"test": /\.jsx$/,
					"exclude": /(node_modules|bower_components)/,
					"use": [ "babel-loader" ]
				},

				{
					"test": /\.(scss|sass)$/,
					"use": [
						{
							"loader": "style-loader",
							"options": { "singleton": true }
						},
						{
							"loader": "css-loader",
							"options": { "sourceMap": true }
						},
						{
							"loader": "resolve-url-loader",
							"options": { "sourceMap": true }
						},
						{
							"loader": "sass-loader",
							"options": { "sourceMap": true }
						}
					]
				},

				{
					"test": /\.css$/,
					"use": [
						{
							"loader": "style-loader",
							"options": { "singleton": true }
						},
						{
							"loader": "css-loader",
							"options": { "sourceMap": true }
						},
						{
							"loader": "resolve-url-loader",
							"options": { "sourceMap": true }
						}
					]
				},

				{
					"test": /\.(ttf|svg|eot|woff2?)$/,
					"use": [ "url-loader" ]
				}
			]
		},

		"externals": {
			"React": "react",
			"ReactDOM": "react-dom",
			"$": "jquery",
			"jQuery": "jquery"
		},

		"plugins": plough( [
			new DefinePlugin( {
				"process.env.NODE_ENV": '"production"'
			} ),

			new BundleAnalyzerPlugin( {
				"analyzerMode": "static",
				"reportFilename": "report.deploy.html",
				"openAnalyzer": false,
				"generateStatsFile": true,
				"statsFilename": "report.deploy.json"
			} ),

			new ModuleConcatenationPlugin( ),

			nchunk(
				"lodash",
				"jquery",
				"react",
				"mjml,lodash,jquery,react",
				{ "extension": "deploy.js" }
			),

			new UglifyJsPlugin( {
				"compress": {
					"keep_fargs": true,
					"keep_fnames": true,
					"keep_infinity": true,
					"warnings": false,
					"passes": 3
				},
				"mangle": {
					"keep_fnames": true
				},
				"comments": false,
				"sourceMap": true
			} )
		] ),

		"devtool": "#source-map",

		"stats": { "warnings": true }
	}
};
