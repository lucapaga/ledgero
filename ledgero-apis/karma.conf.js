// Karma configuration
// Generated on Sat Dec 31 2016 12:31:20 GMT+0100 (ora solare Europa occidentale)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //'test/poc01/poc01.spec.js'
      'src/all-tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'src/**/*.js': ['babel'],
      //'test/**/*.js': ['babel']
      //'src/**/*.js': ['webpack'],

      //'test/poc01/poc01.spec.js': ['webpack']
      'src/all-tests.js': ['webpack', 'sourcemap']

      //'src/**/*.js': ['browserify'],
      //'test/**/*.js': ['browserify']
    },
    /*
    browserify: {
      debug: true,
      transform: [ 'babelify' ]
    },
    */

    /*
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    */

    webpack: {
      /*
      entry: {},
      output: {
        path: './build/webpack/test',
        filename: "bundle.js"
      },
      */
      devtool: 'inline-source-map',
      target: 'node',
      plugins: [],
      module: {
        loaders: [
          {
            test: /\.js$/,
            //exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      }
    },

    /*
    webpackMiddleware: {
      stats: 'errors-only'
    },
    */

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['junit', 'progress'],
    junitReporter: {
      outputDir: 'test-reports', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'karma-test-report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: 'it.lucapaga.ledgero-apis.tests', // suite will become the package name attribute in xml testsuite element
      useBrowserName: false, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
