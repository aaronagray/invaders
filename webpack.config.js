module.exports = {
  entry: 'src/js/app.js',
  output: {
    fileName: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}
