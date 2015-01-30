'use strict';

var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./components/App'))
});

app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

app.registerStore(require('./stores/ApplicationStore'));

module.exports = app;