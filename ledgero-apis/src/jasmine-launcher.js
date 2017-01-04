
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

var jasmineReporters = require('jasmine-reporters');

jasmine.loadConfigFile('src/jasmine.json');

// JUnit reporter
var junitReporter = new jasmineReporters.JUnitXmlReporter({
    savePath: 'test-reports',
    consolidateAll: true, // one single output file
    filePrefix:'jasmine-test-report'
});
jasmine.addReporter(junitReporter);

jasmine.execute();
