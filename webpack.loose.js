require( "graceful-fs" ).gracefulify( require( "fs" ) );

const nchunk = require( "nchunk" );
const path = require( "path" );
const plough = require( "plough" );
const webpack = require( "webpack" );

const BowerResolvePlugin = require( "bower-resolve-webpack-plugin" );
const BundleAnalyzerPlugin = require( "webpack-bundle-analyzer" ).BundleAnalyzerPlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;

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
			"filename": "prompt.support.js"
		},

		"module": {
			"rules": [
				{
					"test": /\.jsx$/,
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
			new BundleAnalyzerPlugin( {
				"analyzerMode": "static",
				"reportFilename": "report.support.html",
				"openAnalyzer": false,
				"generateStatsFile": true,
				"statsFilename": "report.support.json"
			} ),

			new ModuleConcatenationPlugin( ),

			nchunk(
				"lodash",
				"jquery",
				"react",
				"mjml,lodash,jquery,react"
			)
		] ),

		"devtool": "#source-map",

		"stats": { "warnings": true }
	}
};
