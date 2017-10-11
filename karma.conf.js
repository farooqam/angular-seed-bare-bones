//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'test/**/*.js',
      'src/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {  
      'src/**/*.js': ['coverage']
    },

    coverageReporter: {  
      type: 'html',
      dir: 'test/code_coverage',

      instrumenterOptions: {
        istanbul: { noCompact: true }
      },

      watermarks: {
        statements: [ 80, 85 ],
        functions: [ 80, 85 ],
        branches: [ 80, 85 ],
        lines: [ 80, 85 ]
      }
    },

    logLevel: config.LOG_DEBUG

  });
};
