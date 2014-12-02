'use strict';
var React = require('react');

/**
 * The app
 *
 * @class App
 * @constructor
 */
var App = React.createClass({
    getInitialState: function() {
        return {
            builder: {
                items: [
                    {name: 'Bd-0', code: 'border: 0'},
                    {name: 'Bd-1', code: 'border-width: 1px'},
                    {name: 'Bdx-1', code: 'border-left-width: 1px;\nborder-right-width: 1px;'},
                ]
            }
        };
    },
    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function() {
        var lis = this.state.builder.items.map(function (item) {
            return (
                <li className="My-2px">
                    <label>
                        <input type="checkbox" className="Va-t" name={item.name} />
                        <pre className="M-0 D-ib Bd-1 Px-4px Py-2px Bgc-wh">{item.code}</pre>
                    </label>
                </li>
            );
        });

        return (
            <div>
                <h3>Border</h3>
                <ul className="List-n P-0">
                    {lis}
                </ul>
            </div>
        );
    }
});

module.exports = App;