'use strict';
var Promise = require('bluebird');
var got = require('got');
var cheerio = require('cheerio');

module.exports = function(category, pn) {
  var url;
  if (typeof pn === 'undefined') { pn = 1; }
  if (category === 'featured') {
    url = 'https://github.com/blog' + '?page=' + pn;
  } else if (category === 'broadcasts') {
      url = 'https://github.com/blog/broadcasts' + '?page=' + pn;
  } else {
	    url = 'https://github.com/blog/category/' + category + '?page=' + pn;
  }

  return got(url).then(function (res) {
    var $ = cheerio.load(res.body);
    // field arrays
    var data = [], dates = [], authors = [], categories = [], avatarUrls = [];

    // get dates
    $('ul[class=blog-post-meta]').each(function(index) {
      var date = $(this).text();
      date = date.substring(19, 37);
      date = date.replace('\n', '');  
      dates[index] = new Date(date.replace(/\s*$/,"")).getTime() / 1000;
    });

    // get author avatar urls
    $('.author-avatar').each(function(index) {
      var link = $(this);
      avatarUrls[index] = link.attr('src');
    });

    // get authors
    $('ul[class=blog-post-meta]').each(function(index) {
      var author = $(this).text();
      author = author.substring(45, 70);
      author = author.replace('\n', '');
      authors[index] = author.replace(/^\s\s*/, '').replace(/\s*$/,'');
    });

    // get categories
    $('ul[class=blog-post-meta]').each(function(index) {
      var category = $(this).text();
      category = category.substring(70, 100);
      category = category.replace('\n', '');
      categories[index] = category.replace(/^\s\s*/, '').replace(/\s*$/,'');
    });

    // iterates through each title in a single page
    $('.blog-post-title > a').each(function(index) {
      var link = $(this);
      data[index] = {
        author: authors[index],
        id: link.attr('href').substring(6, link.attr('href').indexOf('-')),
        timestamp: dates[index],
        title: link.text(),
        category: categories[index],
        url: 'https://github.com' + link.attr('href'),
        avatar_url: avatarUrls[index]
      };
    });

    if (typeof data[0] === 'undefined') { // no more pages
      return null;
    } else {
        return new Promise(function(resolve) {
          return resolve({
            page_num: pn.toString(),
            category: category,
            results: data
          });
        });
      }
  });
};