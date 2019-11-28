module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: __dirname + '/client/app.jsx',
	module: {
		rules: [
			{
				test: [/\.jsx$/],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			}	
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	}
}
