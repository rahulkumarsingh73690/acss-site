'use strict';
var React = require('react');

/**
 * React class to handle the rendering of the HTML head section
 *
 * @class Html
 * @constructor
 */
var Html = React.createClass({
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function() {
        return (
            <html id="atomic">
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.title}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href="/public/css/atomic.css" />
                <link rel="stylesheet" href="/public/css/site.css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/client.js" defer></script>
            </html>
        );
    }
});

module.exports = Html;