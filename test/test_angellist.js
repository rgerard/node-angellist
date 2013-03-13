var angel = require('../index'),
    CLIENT_ID = '',
    CLIENT_SECRET = '';

module.exports = {
    setUp: function (callback) {
        // Init the angellist object
        angel.init(CLIENT_ID, CLIENT_SECRET);
        callback();
    },

    tearDown: function (callback) {
        callback();
    },

    testAuthorize: function(test) {
        test.expect(3);

        // Get the NFL schedule for week 1
        angel.authorize(function(err, response) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(entity !== null, 'Entity is null! ' + entity);
            test.ok(entity.name === 'Dropbox', 'Name is incorrect! ' + entity.name);
            test.done();
        });
    },
};