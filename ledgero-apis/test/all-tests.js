// Test indexer... to load all tests
var testsContext = require.context(".", true, /spec.js$/);
testsContext.keys().forEach(function(path) {
    try {
        testsContext(path);
    } catch(err) {
        console.error('[ERROR] WITH SPEC FILE: ', path);
        console.error(err);
    }
});
