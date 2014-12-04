'use strict';
var React = require('react');

// components
var Nav = require('./Nav');
var PageHome = require('./PageHome');
var PageOverview = require('./PageOverview');
var PageCustomize = require('./PageCustomize');

// stores
var ApplicationStore = require('../stores/ApplicationStore');

// mixins
var RouterMixin = require('flux-router-component').RouterMixin;
var StoreMixin = require('fluxible-app').StoreMixin;

/**
 * The app
 *
 * @class App
 * @constructor
 */
var App = React.createClass({
    mixins: [RouterMixin, StoreMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function () {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function () {
        var state = this.getStore(ApplicationStore).getState();
        this.setState(state);
    },
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function() {
        var page = '';

        switch (this.state.currentPageName) {
            case 'home':
                page = <PageHome />;
                break;
            case 'overview':
                page = <PageOverview/>;
                break;
            case 'customize':
                page = <PageCustomize/>;
                break;
        }

        return (
            <div id="master-wrapper">
                <h1>Atomic.css</h1>
                <p>A collection of single purpose styling units for maximum reuse.</p>
                <Nav selected={this.state.currentPageName} links={this.state.pages} context={this.props.context}/>
                {page}
            </div>
        );
    }
});

module.exports = App;