/*global document, window */
'use strict';
var React = require('react'),
    App = React.createElement(require('./components/App'));

window.React = React; // for chrome dev tool support

var mountNode = document.getElementById('app');

React.render(
    App,
    mountNode
);