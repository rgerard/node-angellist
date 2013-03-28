# node-angellist: Easy wrapper around the AngelList API

This module is designed to be an easy-to-use wrapper around the AngelList API.  This module is designed to be used with node.js.

## Install

<pre>
  npm install angellist
</pre>

Or from source:

<pre>
  git clone git://github.com/rgerard/node-angellist.git
  cd node-angellist
  npm install
</pre>


## Simple Examples

```javascript
var angel = require('angellist');

// Init the object with your API key
angel.init(clientID, clientSecret);

// Search for a company name
angel.search('pickmoto', function(error, results) {
 if (!error) {
    console.log(results) // Print the search results
  }
});
```


## Documentation

Please refer to the <a href="https://angel.co/api">AngelList API documentation</a> for more detail on their API.

* [init](#init)
* [getAuthUrl](#getAuthUrl)
* [requestAccessToken](#requestAccessToken)
* [setAccessToken](#setAccessToken)
* [getMe](#getMe)
* [search](#search)
* [getUserById](#getUserById)


## AngelList API

<a name="init" />
### init(clientID, clientSecret)

Inits the object with your client data;

__Arguments__

* clientID - Your client ID
* clientSecret - Your client secret

__Example__

```js
// Init an AngelList object
var angel = require('angellist');
angel.init(clientID, clientSecret);
```

---------------------------------------

<a name="getAuthUrl" />
### getAuthUrl()

Returns the URL needed to start the authentication process.

__Example__

```js
// Redirect the user to the auth URL
var url = angel.getAuthUrl();
res.redirect(url);
```

---------------------------------------

<a name="requestAccessToken" />
### requestAccessToken(code, callback)

Requests an access token for a user who has authenticated your application

__Arguments__

* code - Returned from AngelList after the user has authenticated your app
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the access token
angel.requestAccessToken(req.query['code'], function(err, body) {
 if (!error) {
    // Set the access token
    angel.setAccessToken(body.access_token);
  }
});
```

---------------------------------------

<a name="setAccessToken" />
### setAccessToken(token)

Stores the access token returned from AngelList

__Arguments__

* token - Token to save

__Example__

```js
// Fetch the access token
angel.requestAccessToken(req.query['code'], function(err, body) {
 if (!error) {
    // Set the access token
    angel.setAccessToken(body.access_token);
  }
});
```

---------------------------------------

<a name="getMe" />
### getMe(callback)

Returns the information about the logged-in user

__Arguments__

* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the posts for a company/person
angel.getMe(function(err, user) {
 if (!error) {
    console.log(user);
  }
});
```

---------------------------------------

<a name="search" />
### search(query, callback)

Returns the search results from a query.

__Arguments__

* query - The person or company to search for
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Search for a person or company
angel.search('pickmoto', function(err, results) {
 if (!error) {
    console.log(results);
  }
});
```

---------------------------------------

<a name="getUserById" />
### getUserById(angelID, callback)

Returns the information about a user by their AngelList ID.

__Arguments__

* angelID - The AngelList ID of the person to get information for.
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Search for a person or company
angel.getUserById(77, function(err, user) {
 if (!error) {
    console.log(user);
  }
});
```