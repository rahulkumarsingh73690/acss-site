module.exports = function (context, payload) {
    var query = (typeof payload === 'string') ? payload : '';

    context.dispatch('CHANGE_SEARCH_TERM', {
        query: query
    });
};