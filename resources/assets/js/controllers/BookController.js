var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var books = require('../collections/books');
var app = require('../app');
var ListBookView = require('../views/BookViews/index');
var EditBookView = require('../views/BookViews/edit');
var CreateBookView = require('../views/BookViews/create');

BookController = Marionette.Controller.extend({
    index: function () {
        app.getRegion('container').show(new ListBookView({collection: books}));
    },
    create: function () {
        app.getRegion('container').show(new CreateBookView());
    },
    edit: function () {
        app.getRegion('container').show(new EditBookView());
    }
});

bookController = new BookController();

module.exports =  bookController;
