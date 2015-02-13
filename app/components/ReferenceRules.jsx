/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Rules = require('atomizer/src/rules');

// stores
var ReferenceStore = require('../stores/ReferenceStore');

// mixins
var FluxibleMixin = require('fluxible').Mixin;


/**
 * Reference docs for the ruleset
 *
 * @class ReferenceRules
 * @constructor
 */
var ReferenceRules = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [ReferenceStore]
    },

    getInitialState: function () {
        this.store = this.getStore(ReferenceStore);
        return this.store.getState();
    },

    onChange: function () {
        var state = this.store.getState();
        this.setState(state);
    },

    /**
     * Refer to React documentation render
     *
     * @method render
     * @return {Object} HTML head section
     */
    render: function () {
        var searchRE = this.state.currentQuery ? new RegExp(this.state.currentQuery, 'i') : false;
        var customConfig = this.state.customConfigObj;
        var hasConfig = !!customConfig;

        var items = Rules.map(function (recipe) {
            var values = [],
                classDefinitions = [],
                declarationBlock,
                searching = !!this.state.currentQuery,
                searchTitleMatches = null,
                showRecipeBlock = false;

            if (searching) {
                searchTitleMatches = (recipe.name.search(searchRE) > -1);
            }

            if (recipe.type === 'pattern') {
                // Some entries allow custom values to be provided in configuration
                if (recipe.allowCustom) {
                    var custom = "[value" + (recipe.allowCustomAutoSuffix ? '|suffix' : '') + "]";
                    values.push({
                        rawSelector: recipe.prefix + custom,
                        rawValue: 'value',
                        selector: <b>{recipe.prefix}<i>{custom}</i></b>, 
                        value: <i>value</i>
                    });
                }
                // Some have pre-defined classes/values
                if (recipe.rules) {
                    values = values.concat(recipe.rules.map(function (rule) {
                        var selector = recipe.prefix + rule.suffix;
                        var value = rule.values.join(' ').replace('$START', 'left').replace('$END', 'right');
                        return {
                            rawSelector: selector, 
                            rawValue: value,
                            selector: <b>{selector}</b>, 
                            value: value
                        };
                    }));
                }

                // Loop through the selectors and generate the actual styles for each
                for (var x=0; x < values.length; x++) {
                    var v = values[x];
                    var showRuleset = false;
                    if (recipe.properties && recipe.properties.length) {
                        var rawDeclarationBlock = [];
                        var styledDeclarationBlock = [];

                        for (var i=0; i < recipe.properties.length; i++) {
                            var property = recipe.properties[i].replace('$START', 'left').replace('$END', 'right');
                            rawDeclarationBlock.push(property + ": " + v.rawValue + ";");
                            styledDeclarationBlock.push(<div>{property}: {v.value};</div>);
                        }

                        // Filter with search
                        if (!searching || 
                                searchTitleMatches || 
                                v.rawSelector.search(searchRE) > -1 || 
                                rawDeclarationBlock.join('\n').search(searchRE) > -1) {
                            showRuleset = true;
                            showRecipeBlock = true;
                        } 
                        classDefinitions.push([<dt className={showRuleset ? '' : 'D-n'}>{v.selector}</dt>, <dd className={showRuleset ? '' : 'D-n'}>{styledDeclarationBlock}</dd>]);
                    }
                };
            } else if (recipe.type === 'rule') {
                declarationBlock = [];
                for (var selector in recipe.rule) {
                    var showRuleset = false;
                    var declarationObj = recipe.rule[selector];
                    var rawDeclarationBlock = [];
                    var styledDeclarationBlock = [];

                    for (var property in declarationObj) {
                        rawDeclarationBlock.push(property + ": " + declarationObj[property] + ";");
                        styledDeclarationBlock.push(<div>{property}: {declarationObj[property]};</div>);
                    }

                    // Filter with search
                    if (!searching || 
                            searchTitleMatches || 
                            selector.search(searchRE) > -1 || 
                            rawDeclarationBlock.join('\n').search(searchRE) > -1) {
                        showRuleset = true;
                        showRecipeBlock = true;
                    }
                    classDefinitions.push([<dt className={showRuleset ? '' : 'D-n'}><b>{selector}</b></dt>, <dd className={showRuleset ? '' : 'D-n'}>{styledDeclarationBlock}</dd>]);

                }
            }

            var displayclassDefinitions = "Va-t P-10 Bxz-bb W-md-3/12 " + (showRecipeBlock ? "D-ib" : "D-n");
            return (
                <div key={'id-' + recipe.id} className={displayclassDefinitions}>
                    <h3>{recipe.name}</h3>
                    <dl className="M-10">{classDefinitions}</dl>
                </div>
            );

        }, this);

        return (
            <div>
                {items}
            </div>
        );
    }
});

module.exports = ReferenceRules;