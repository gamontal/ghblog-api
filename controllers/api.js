var ghBlog = require('../lib/bpage');
var config = require('../config');
var baseUrl = 'http://ghblog-api.heroku.com/blog/';
var urls = {
  featured_url: baseUrl + 'category/featured',
  all_url: baseUrl + 'category/all',
  ship_url: baseUrl + 'category/ship',
  engineering_url: baseUrl + 'category/engineering',
  enterprise_url: baseUrl + 'category/enterprise',
  conferences_url: baseUrl + 'category/conferences',
  meetup_url: baseUrl + 'category/meetup',
  hire_url: baseUrl + 'category/hire',
  watercooler_url: baseUrl + 'category/watercooler',
  broadcasts_url: baseUrl + 'broadcasts'
}, p;

// GET http://ghblog-api.heroku.com
exports.api = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(urls , 2, 2));
};

// GET /blog/category/featured
exports.featured = function(req, res) {
  p = req.param('page', 1);
  ghBlog('featured', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
  });
};

// GET /blog/category/all
exports.all = function(req, res) {
  p = req.param('page', 1);
  ghBlog('all', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/ship
exports.ship = function(req, res) {
  p = req.param('page', 1);
  ghBlog('ship', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/engineering
exports.engineering = function(req, res) {
  p = req.param('page', 1);
  ghBlog('engineering', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/enterprise
exports.enterprise = function(req, res) {
  p = req.param('page', 1);
  ghBlog('enterprise', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/conferences
exports.conferences = function(req, res) {
  p = req.param('page', 1);
  ghBlog('conferences', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/meetup
exports.meetup = function(req, res) {
  p = req.param('page', 1);
  ghBlog('meetup', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/hire
exports.hire = function(req, res) {
  p = req.param('page', 1);
  ghBlog('hire', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/category/watercooler
exports.watercooler = function(req, res) {
  p = req.param('page', 1);
  ghBlog('watercooler', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};

// GET /blog/broadcasts
exports.broadcasts = function(req, res) {
  p = req.param('page', 1);
  ghBlog('broadcasts', p).then(function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, 2, 2));
   });
};