var Marionette = require('backbone.marionette');
var app = require('../app');
var users = require('../collections/users');
var listUser = require('../views/UserViews/index');
var EditUserView = require('../views/UserViews/edit');
var CreateUserView = require('../views/UserViews/create');

UserController = Marionette.Controller.extend({
    index: function () {
        listUser = new ListUserView({
            collection: users
        });
        app.getRegion('container').show(listUser);
    },
    create: function () {
        alert('XX');
        app.getRegion('container').show(new CreateUserView());
    },

    edit: function () {
        app.getRegion('container').show(new EditUserView());
    }
});

userController = new UserController();
module.exports =  userController;

