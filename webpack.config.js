const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test:/\.(ts|tsx)?$/,
        use:'ts-loader',
        exclude:/node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        query: {
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      }
      , { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      , {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    // historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
