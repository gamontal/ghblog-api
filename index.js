var Promise = require('bluebird');
var pagesLib = require('./lib/pages');
var pages = new Array();
// Current state: only returns 15 posts (one page) by request.
// TODO: Find a way to make multiple requests to the pages local library using a loop and merge existing page arrays with new ones
// until it gets a null response and sends an object back with all the pages of a given blog section
module.exports = function(category) {
    var promiseFor = Promise.method(function(condition, action, value) {
        if (!condition(value)) return value;
        return action(value).then(promiseFor.bind(null, condition, action));
    });

    return new Promise(function(resolve) {
    promiseFor(function(count) {
        return count < 10;
    }, function(count) {
        return pagesLib(category, count).then(function(res) { 
                     pages = pages.concat(res);
                     return count++;
                });
    }, 1).then(console.log(pages));
  });
};
    
// LAST_UPDATED: 12/14/15 - 6:56 pm