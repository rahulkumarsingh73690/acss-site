/*global document, window */
'use strict';
var React = require('react'),
    App = React.createFactory(require('./asd/App'));

window.React = React; // for chrome dev tool support

var mountNode = ;

React.render(
    App,
    document.getElementById('app')
);