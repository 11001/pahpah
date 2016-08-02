var Backbone = require('backbone');
var book = require('../models/book');

var Books = Backbone.Collection.extend({
    url: '/book',
    model: book
});

books = new Books();
books.fetch();
module.exports =  books;


