var Backbone = require('backbone');
var user = require('../models/user');

var Users = Backbone.Collection.extend({
    url: '/user',
    model: user
});

users = new Users();
users.fetch();
module.exports =  users;

