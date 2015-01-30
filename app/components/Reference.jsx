'use strict';
var React = require('react'),
    // BuilderData = require('../build/js/reference.js'),
    Rules = require('atomic-css').rules;

/**
 * Generates atomic.css sass variables
 *
 * @class Reference
 * @constructor
 */
var Reference = React.createClass({
    getInitialState: function () {
        return {
            rules: Rules
        };
    },
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function () {
        var items = this.state.rules.map(function (item) {
            var values = '';
            // var values = item.values.map(function (value) {
            //     value = value.trim();
            //     return (
            //         <label key={value} className="Py-2px D-b">
            //             <input type="checkbox" value={value} name={item.key} />
            //             <b className="Mstart-4">{value}</b>
            //         </label>
            //     );
            // });

            return (
                <div className="D-ib Va-t P-10 Bxz-bb W-md-3/12">
                    <h3>{item.id}</h3>
                    {item.prefix}
                    {values}
                </div>
            );

        });

        return (
            <div>{items}</div>
        );
    }
});

module.exports = Reference;