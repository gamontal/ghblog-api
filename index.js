var Promise = require('bluebird');
var pagesLib = require('./lib/pages');

// Current state: only returns 15 posts (one page) by request.
// TODO: Find a way to make multiple requests to the pages local library using a loop and merge existing page arrays with new ones
// until it gets a null response and sends an object back with all the pages of a given blog section
module.exports = function(category) {
    return new Promise(function(resolve, reject) {
       var pages = [];
       for (var pnum = 1; pnum <= 9; pnum++) {
        pagesLib(category, pnum).then(function(data) {
            if(data === null) { return resolve(pages); } else {
                pages = data;
            }
        });
       }
    });
};
// LAST_UPDATED: 12/13/15 - 9:20 pm