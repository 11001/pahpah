var $ = require('jquery');

$(function(){
    Backbone = require('backbone');
    var bookRouter = require('./routes/bookRoute');
    var userRouter = require('./routes/userRoute');
    Backbone.history.start();

});
