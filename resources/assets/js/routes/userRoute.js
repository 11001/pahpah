var Marionette = require('backbone.marionette');
var UserController = require('../controllers/UserController');

var userRouter = new Marionette.AppRouter({
    controller: userController,
    appRoutes: {
        'user': 'index',
        'user/create': 'create',
        'user/edit/:id': 'edit'
    }
});

module.exports =  userRouter;

