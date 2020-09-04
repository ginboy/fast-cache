
const path =require('path')

module.exports={
	mode:'development',  
	entry:path.join(__dirname,'./src/index.js'),
	output:{
		path:path.join(__dirname,'./release'),
		filename:'bundle.js'
	},
	module:{
		rules:[{
				test:/\.js?$/,
				exclude:/(node_modules)/,
				loader:'babel-loader'
			}]
	}
}