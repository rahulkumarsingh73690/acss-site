'use strict';
var React = require('react'),
    Builder = require('./Builder');

/**
 * PageCustomize
 *
 * @class Nav
 * @constructor
 */
var PageCustomize = React.createClass({
    getInitialState: function() {
        return {};
    },
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function() {
        return (
            <div id="customize">
                <h2>Customize</h2>
                <Builder />
            </div>
        );
    }
});

module.exports = PageCustomize;