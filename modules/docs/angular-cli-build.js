/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    sassCompiler: {
      includePaths: [ 'node_modules/ng2-material/' ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      'ng2-material/**/*.*',
      '@angular2-material/**/*.*',
      '@angular/**/*.js'
    ]
  });
};
