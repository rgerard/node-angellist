// Copyright 2010-2012 Ryan Gerard
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

function authorize(callback) {
    var url = 'https://angel.co/api/oauth/authorize?client_id=' + config.clientID + '&scope=email&response_type=code';
    createRequest(url, callback);
}

function requestAccessToken(code, callback) {
    var url = 'https://angel.co/api/oauth/token?client_id=' + config.clientID + '&client_secret=' + config.secret + '&code=' + code + '&grant_type=authorization_code';
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

module.exports = {
    init: function(clientID, secret) {
        return init(clientID, secret);
    },

    authorize: function(callback) {
        return authorize(callback);
    },

    requestAccessToken: function(code, callback) {
        return requestAccessToken(code, callback);
    }
}