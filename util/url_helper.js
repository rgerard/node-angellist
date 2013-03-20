var config = require('../config'),
    _ = require('underscore');

function createAuthUrl() {

    // URL should look like: https://angel.co/api/oauth/authorize?client_id=CLIENTID&scope=email&response_type=code
    return 'https://angel.co/api/oauth/authorize?client_id='
        + config.clientID
        + '&scope=email&response_type=code';
}

function createAccessTokenRequestUrl(code) {

    // URL should look like: 'https://angel.co/api/oauth/token?client_id=CLIENTID&client_secret=SECRET&code=CODE&grant_type=authorization_code';
    return 'https://angel.co/api/oauth/token?client_id='
        + config.clientID
        + '&client_secret='
        + config.secret + '&code='
        + code
        + '&grant_type=authorization_code';
}

function createMeUrl() {

    // URL should look like: 'https://api.angel.co/1/me?access_token=TOKEN;
    return 'https://api.angel.co/1/me?access_token='
        + config.access_token;
}

function createSearchUrl(query) {

    // URL should look like: 'https://api.angel.co/1/search?query=QUERY'
    return 'https://api.angel.co/1/search?query='
        + encodeURIComponent(query);
}

function createSearchSlugUrl(query) {

    // URL should look like: 'https://api.angel.co/1/search/slugs?query=QUERY'
    return 'https://api.angel.co/1/search/slugs?query'
        + encodeURIComponent(query);
}

function createUserUrl(userID) {

    // URL should look like: 'https://api.angel.co/1/users/ANGELLISTID';
    return 'https://api.angel.co/1/users/'
        + userID;
}

function createUsersBatchUrl(userIDs) {

    // Map array of IDs to a comma-separated string
    var idList = _.reduce(userIDs, function(initial, userID){ return initial + userID + ','; }, '');

    // URL should look like: 'https://api.angel.co/1/users/batch?ids=ID1,ID2';
    return 'https://api.angel.co/1/users/batch?ids='
        + idList;
}

module.exports = {

    createAuthUrl: function() {
        return createAuthUrl();
    },
    createAccessTokenRequestUrl: function(code) {
        return createAccessTokenRequestUrl(code);
    },
    createMeUrl: function() {
        return createMeUrl();
    },
    createSearchUrl: function(query) {
        return createSearchUrl(query);
    },
    createSearchSlugUrl: function(query) {
        return createSearchSlugUrl(query);
    },
    createUserUrl: function(userID) {
        return createUserUrl(userID);
    },
    createUsersBatchUrl: function(userIDs) {
        return createUsersBatchUrl(userIDs);
    }
}