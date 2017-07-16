const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// const fallback = require('fallback-loader')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			'@assets': resolve('src/assets'),
			'@configs': resolve('src/configs'),
			'@helpers': resolve('src/helpers'),
			'@pages': resolve('src/pages'),
			'@styles': resolve('src/assets/styles'),
			'@svgs': resolve('src/assets/svgs'),
			'@fonts': resolve('src/assets/fonts'),
			'@icons': resolve('src/assets/icons'),
			'@images': resolve('src/assets/images'),
			'@components': resolve('src/components')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
				  limit: 10000,
				  name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			// { 	test: /\.svg$/,
			// 	loader: 'svg-loader'
			// },
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
				  limit: 10000,
				  name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	}
}
