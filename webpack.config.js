const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  //devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|bmp|jpg|gif)$/,
        use: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(vert|frag|geom|tess)$/,
        use: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};