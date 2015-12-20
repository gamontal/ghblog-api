var express = require('express');
var morgan = require('morgan');
var app = express();
var config = require('./config'); // configuration file

app.use(morgan('dev')); // use morgan to log requests to the console

var apiController = require('./controllers/api'); // api controllers
var apiRoutes = express.Router(); // router instance

// API ROUTES
// ----------------------------------------

// http://ghblog-api.heroku.com/
apiRoutes.route('/').get(apiController.api);

// http://ghblog-api.heroku.com/blog/category/featured
apiRoutes.route('/blog/category/featured').get(apiController.featured);

// http://ghblog-api.heroku.com/blog/category/all
apiRoutes.route('/blog/category/all').get(apiController.all);

// http://ghblog-api.heroku.com/blog/category/ship
apiRoutes.route('/blog/category/ship').get(apiController.ship);

// http://ghblog-api.heroku.com/blog/category/engineering
apiRoutes.route('/blog/category/engineering').get(apiController.engineering);

// http://ghblog-api.heroku.com/blog/category/enterprise
apiRoutes.route('/blog/category/enterprise').get(apiController.enterprise);

// http://ghblog-api.heroku.com/blog/category/conferences
apiRoutes.route('/blog/category/conferences').get(apiController.conferences);

// http://ghblog-api.heroku.com/blog/category/meetup
apiRoutes.route('/blog/category/meetup').get(apiController.meetup);

// http://ghblog-api.heroku.com/blog/category/hire
apiRoutes.route('/blog/category/hire').get(apiController.hire);

// http://ghblog-api.heroku.com/blog/category/watercooler
apiRoutes.route('/blog/category/watercooler').get(apiController.watercooler);

// http://ghblog-api.heroku.com/blog/broadcasts
apiRoutes.route('/blog/broadcasts').get(apiController.broadcasts);

app.use(apiRoutes);

// catch 404 status code
app.get('*', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Not Found' }, 2, 2), 404);
});

// start the server
// ----------------------------------------
app.listen(config.port, function() {
  console.log('Server listening on port: ' + config.port);
});