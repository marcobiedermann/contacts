const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'client',
  },
  devtool: 'cheap-module-source-map',
  entry: {
    main: [
      path.resolve(__dirname, 'client/assets/js/index'),
    ],
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'server/public'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
