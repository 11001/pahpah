var Backbone = require('backbone');
book = Backbone.Model.extend({
    urlRoot: '/book',
    validation: {
        title: {
            required: true,
            pattern: /^[A-z]+$/,
        },
        author: {
            required: true,
            pattern: /^[A-z]+$/
        },
        year: {
            required: true,
            length: 4,
            pattern: 'number'
        },
        genre: {
            required: true,
            pattern: /^[A-z]+$/
        }
    }
});
module.exports = book;
