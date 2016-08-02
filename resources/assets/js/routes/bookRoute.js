var Marionette = require('backbone.marionette');
var BookController = require('../controllers/BookController');

var bookRouter = new Marionette.AppRouter({
    controller: bookController,
    appRoutes: {
        'book': 'index',
        'book/create': 'create',
        'book/edit/:id': 'create',
    }
});
module.exports = bookRouter;

