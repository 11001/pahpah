var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var BackboneValidation = require('backbone.validation');
var book = require('../../models/book');

CreateBookView = Marionette.ItemView.extend({
    template: '#createBook',
    model: new book(),
    ui: {
        title: '[name="title"]',
        author: '[name="author"]',
        year: '[name="year"]',
        genre: '[name="genre"]'
    },
    initialize: function () {
        this.bindUIElements();
        BackboneValidation.bind(this);
    },
    events: {
        'click .btn': function () {
            this.model.save({
                title: this.ui.title.val(),
                author: this.ui.author.val(),
                year: this.ui.year.val(),
                genre: this.ui.genre.val(),
            });
        }
    }
});

module.exports = CreateBookView;
