require('node-jsx').install({ extension: '.jsx' });

var express = require('express');
var favicon = require('serve-favicon');
var expressState = require('express-state');
var bodyParser = require('body-parser');
var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));


var server = express();
expressState.extend(server);
server.set('state namespace', 'App');
server.use(favicon(__dirname + '/../favicon.ico'));
server.use('/public', express.static(__dirname + '/build'));
server.use(bodyParser.json());

// Every other request gets the app bootstrap
server.use(function(req, res, next) {
  var component = HtmlComponent();
  var html = React.renderToString(component);
  res.send(html);
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
