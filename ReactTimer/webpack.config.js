var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    '../app/app.jsx'
  ],
  resolve: {
    root: __dirname,
    alias: {
      Main:               'app/components/Main.jsx',
      Navigation:         'app/components/Navigation.jsx',
      Countdown:          'app/components/Countdown.jsx',
      CountdownForm:      'app/components/CountdownForm.jsx',
      Controls:           'app/components/Controls.jsx',
      Timer:              'app/components/Timer.jsx',
      Clock:              'app/components/Clock.jsx',
      applicationStyles:  'app/css/style.scss'
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + '/src/',
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
