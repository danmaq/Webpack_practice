module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './index',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              'env',
              { targets: { browsers: ['last 2 versions'] } }
            ]
          ]
        }
      }
    ]
  }
};