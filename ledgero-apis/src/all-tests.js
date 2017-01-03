// Test indexer... to load all tests
/*
var srcsContext = require.context("../src", true, /\.js$/);
srcsContext.keys().forEach(function(path) {
    try {
        srcsContext(path);
    } catch(err) {
        console.error('[ERROR] WITH SOURCE FILE: ', path);
        console.error(err);
    }
});
*/
require('../node_modules/babel-polyfill/dist/polyfill.js');
var testsContext = require.context("./", true, /\.spec\.js$/);
testsContext.keys().forEach(function(path) {
    try {
        testsContext(path);
    } catch(err) {
        console.error('[ERROR] WITH SPEC FILE: ', path);
        console.error(err);
    }
});
