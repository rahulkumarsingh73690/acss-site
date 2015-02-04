'use strict';
var createStore = require('fluxible/utils/createStore');

var ReferenceStore = createStore({
    storeName: 'ReferenceStore',
    handlers: {
        'CHANGE_SEARCH_TERM': 'handleSearch'
    },
    initialize: function () {
        this.currentQuery = '';
    },
    handleSearch: function (payload) {
        var query = payload.query.trim();
        if (query === this.getCurrentQuery()) {
            return;
        }
        this.currentQuery = query;
        this.emit('change');
    },
    getCurrentQuery: function () {
        return this.currentQuery;
    },
    getState: function () {
        return {
            currentQuery: this.currentQuery
        };
    },
    dehydrate: function () {
        return this.getState();
    },
    rehydrate: function (state) {
        this.currentQuery = state.currentQuery;
    }
});


module.exports = ReferenceStore;