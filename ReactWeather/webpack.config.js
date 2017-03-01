var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    '../app/js/app.jsx'
  ],
  resolve: {
    root: __dirname,
    alias: {
      Main:            '../app/js/components/Main.js',
      Nav:             '../app/js/components/Nav.js',
      Weather:         '../app/js/components/Weather.js',
      WeatherForm:     '../app/js/components/WeatherForm.js',
      WeatherMessage:  '../app/js/components/WeatherMessage.js',
      About:           '../app/js/components/About.js',
      Examples:        '../app/js/components/Examples.js',
      openWeatherMap:  '../app/js/api/openWeatherMap.js',
      ErrorModal:     '../app/js/components/ErrorModal.js'
      // appStyles:       'app/css/style.css'
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
