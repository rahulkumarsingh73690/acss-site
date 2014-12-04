/*global document, window */
'use strict';
var React = require('react');
var app = require('./app');
var dehydratedState = window.App; // Sent from the server

window.React = React; // for chrome dev tool support

var mountNode = document.getElementById('app');

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    React.render(
        app.getAppComponent()({
            context: context.getComponentContext()
        }),
        document.getElementById('app')
    );
});