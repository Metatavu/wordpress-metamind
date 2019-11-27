const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../js')
  },
  externals: require("./externals.js"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.jpe?g$|\.gif$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=/dist/[hash].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=/dist/[hash].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
        loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=/dist/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
        loader: "file-loader?name=/dist/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml&name=/dist/[name].[ext]"
      }
    ]
  }
}