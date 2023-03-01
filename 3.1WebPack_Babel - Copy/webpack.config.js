const removeConsolePlugin = require('babel-plugin-transform-remove-console');

const path = require('path');


const plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(removeConsolePlugin);
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],plugins
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  /*webpack dev sever , just run the command 'npm start' it redirects to browser.*/
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
  },
  
  
};

