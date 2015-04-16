/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var escapeStringRegexp = require('escape-string-regexp');

var React = require('react');
var Rules = require('atomizer/src/rules');

var Atomizer = require('atomizer');
var atomizer = new Atomizer();

// stores
var ReferenceStore = require('../stores/ReferenceStore');

// mixins
var FluxibleMixin = require('fluxible').Mixin;


function replaceRTLTokens(str) {
    return str.replace('__START__', 'left').replace('__END__', 'right');
}

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
        var searchRE = false,
            customConfig = this.state.customConfigObj || {},
            hasConfig = !!this.state.customConfigObj,
            parsedConfig = atomizer.parseConfig(customConfig);

        if (this.state.currentQuery) {
            searchRE = new RegExp(escapeStringRegexp(this.state.currentQuery), 'i');
        }

        var items = Rules.map(function (recipe) {
            var values = [],
                classDefinitions = [],
                declaration,
                rawDeclarationBlock = [],
                styledDeclarationBlock = [],
                searching = !!this.state.currentQuery,
                searchTitleMatches = null,
                showRecipeBlock = false,
                value,
                suffix,
                prefix = recipe.prefix,
                usesClass = parsedConfig[prefix];

            // If config is provided, filter any rules not used in config
            if (hasConfig && !usesClass) {
                return;
            }

            if (searching) {
                searchTitleMatches = (recipe.name.search(searchRE) > -1);
            }

            if (recipe.type === 'pattern') {

                if (!hasConfig) {
                    if (recipe.allowCustom) {
                        if (recipe.allowSuffixToValue) {
                            suffix = "[custom suffix|value]";
                            value = 'custom value|value';
                        } else {
                            suffix = "[custom suffix]";
                            value = 'custom value';
                        }

                        for (var x = 0; x < recipe.properties.length; x++) {
                            var property = replaceRTLTokens(recipe.properties[x]);
                            rawDeclarationBlock.push(property + ": " + value);
                            styledDeclarationBlock.push(<div>{property}: <em className="C(#07f)">{value}</em></div>);
                        }
                        values.push({
                            rawSelector: prefix + "(" + suffix + ")",
                            rawDeclaration: rawDeclarationBlock,
                            selector: <b>{prefix}(<em>{suffix}</em>)</b>,
                            declaration: styledDeclarationBlock
                        });
                    }
                    if (recipe.rules) {
                        for (var i = 0; i < recipe.rules.length; i++) {
                            rawDeclarationBlock = [];
                            styledDeclarationBlock = [];
                            var rule = recipe.rules[i];
                            var selector = recipe.prefix + '(' + rule.suffix + ')';
                            var value = rule.values.join(' ');
                            for (var x = 0; x < recipe.properties.length; x++) {
                                var property = recipe.properties[x];
                                declaration = property + ": " + value;
                                rawDeclarationBlock.push(replaceRTLTokens(declaration));
                            }
                            values.push({
                                rawSelector: selector, 
                                rawDeclaration: rawDeclarationBlock,
                                selector: <b>{selector}</b>, 
                                declaration: rawDeclarationBlock
                            });
                        }
                    }
                } else if (usesClass) {
                    for (var x=0; x < parsedConfig[prefix].length; x++) {
                        var prefixConfig = parsedConfig[prefix][x];
                        for (var i=0; i < prefixConfig.values.length; i++) {
                            var valueObj = prefixConfig.values[i];
                            rawDeclarationBlock = [];
                            styledDeclarationBlock = [];

                            if (valueObj && valueObj.declaration) {
                                for (var property in valueObj.declaration) {
                                    declaration = replaceRTLTokens(property) + ": " + valueObj.declaration[property];
                                    rawDeclarationBlock.push(declaration);
                                    styledDeclarationBlock.push(<div>{declaration}</div>);
                                }

                                values.push({
                                    rawSelector: prefixConfig.className,
                                    rawDeclaration: rawDeclarationBlock,
                                    selector: <b>{prefixConfig.className}</b>,
                                    declaration: styledDeclarationBlock
                                });
                            }
                        }
                    }
                }

                // Loop through the selectors and generate the actual styles for each
                for (var x=0; x < values.length; x++) {
                    var v = values[x];
                    var showRuleset = false;
                    if (v.declaration) {
                        // Filter with search
                        if (!searching || 
                                searchTitleMatches || 
                                v.rawSelector.search(searchRE) > -1 || 
                                v.rawDeclarationBlock.join('\n').search(searchRE) > -1) {
                            showRuleset = true;
                            showRecipeBlock = true;
                        }
                        var termClasses = 'Pend(10px) Fl(start) Cl(start)';
                        var defClasses = 'Ov(h) M(0) P(0) C(#f2438c)';
                        if (!showRuleset) {
                            termClasses += ' D(n)';
                            defClasses += ' D(n)';
                        }
                        classDefinitions.push([
                            <dt className={termClasses}>{v.selector}</dt>,
                            <dd className={defClasses}>{v.declaration}</dd>
                        ]);
                    }
                };
            }

            var displayclassDefinitions = "Va(t) W(50%)--sm " + (showRecipeBlock ? "D(ib)--sm" : "D(n)");
            return (
                <div key={'id-' + recipe.prefix} className={displayclassDefinitions}>
                    <h3 className="M(0) Mt(10px) P(10px)">{recipe.name}</h3>
                    <dl className="M(0) P(10px) Pt(0) Pend(50px)--sm Ff(m)">{classDefinitions}</dl>
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
