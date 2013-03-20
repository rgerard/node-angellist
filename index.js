// Copyright 2010-2013 Ryan Gerard
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var config = require('./config'),
    request = require('request'),
    urlHelper = require('./util/url_helper');

function init(clientID, secret) {
    config.clientID = clientID;
    config.secret = secret;
}

function setAccessToken(token) {
    config.access_token = token;
}

function getAuthUrl() {
    return urlHelper.createAuthUrl();
}

function requestAccessToken(code, callback) {
    var url = urlHelper.createAccessTokenRequestUrl(code);
    createPostRequest(url, '', callback);
}

function getMe(callback) {

    // If the access token isn't set, return an error
    if(!config.hasOwnProperty('access_token') || config.access_token === null || config.access_token === '') {
        callback({'error':'no access token'}, null);
    } else {
        var url = urlHelper.createMeUrl();
        createRequest(url, callback);
    }
}

function search(query, callback) {
    var url = urlHelper.createSearchUrl(query);
    createRequest(url, callback);
}

function searchBySlug(query, callback) {
    var url = urlHelper.createSearchSlugUrl(query);
    createRequest(url, callback);
}

function getUserById(angelID, callback) {
    var url = urlHelper.createUserUrl(angelID);
    createRequest(url, callback);
}

function getUsersById(angelIDs, callback) {
    var url = urlHelper.createUsersBatchUrl(angelIDs);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (response.statusCode == 200) {
            callback(error, JSON.parse(body));
        } else {
            callback(error, body);
        }
    });
}

function createPostRequest(url, body, callback) {
    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     url,
        body:    body
    }, function(error, response, body){

        if (response.statusCode == 200) {
            callback(error, JSON.parse(body));
        } else {
            callback(error, body);
        }
    });
}

module.exports = {
    init: function(clientID, secret) {
        return init(clientID, secret);
    },

    setAccessToken: function(token) {
        return setAccessToken(token);
    },

    getAuthUrl: function() {
        return getAuthUrl();
    },

    requestAccessToken: function(code, callback) {
        return requestAccessToken(code, callback);
    },

    getMe: function(callback) {
        return getMe(callback);
    },

    search: function(query, callback) {
        return search(query, callback);
    },

    searchBySlug: function(query, callback) {
        return searchBySlug(query, callback);
    },

    getUserById: function(angelID, callback) {
        return getUserById(angelID, callback);
    },

    getUsersById: function(angelIDs, callback) {
        return getUsersById(angelIDs, callback);
    }
}