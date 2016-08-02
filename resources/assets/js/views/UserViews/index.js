var Marionette = require('backbone.marionette');
var user = require('../../models/user');
var users = require('../../collections/users');
var EditUserView = require('./edit');
var $ = require('jquery');

ItemUserView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#itemUserView',
    events: {
        'click .delete': function () {
            console.log(this.model.id);
            this.model.destroy({
                "_token": $('meta[name="csrf-token"]').attr('content')
            });
        },
        'click .edit': function () {
            app.getRegion('container').show(new EditUserView({model: this.model}))
        }
    }
});

ListUserView = Marionette.CollectionView.extend({
    tag: 'ol',
    childView: ItemUserView
});

module.exports = ListUserView;