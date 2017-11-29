const path = require('path');

module.exports = {
  context: __dirname + "/app",

  entry: {
    app: "./js/app.js",
    javascript: "./js/app.js",
    html: "./index.html",
  },

  output: {
    //output.path: "[name].js",
    path: __dirname + "/dist",
    filename: "[name].js",
  },

  resolve: {
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' },
    extensions: [ '*', '.js', '.jsx', '.json'],
    modules:[__dirname, './app/js', 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }],
      },  
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include : path.join(__dirname),
        use: [{
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: '[name].[ext]'
          }  
        }]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]  
      }
    ],
  },
}
