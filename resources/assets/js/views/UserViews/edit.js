var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var BackboneValidation = require('backbone.validation');
var user = require('../../models/user');

EditUserView = Marionette.ItemView.extend({
    template: '#editUser',
    ui: {
        firstname: '[name="firstname"]',
        lastname: '[name="lastname"]',
        email: '[name="email"]',
    },
    initialize: function () {
        this.bindUIElements();
        BackboneValidation.bind(this);
    },
    events: {
        'click .btn': function () {
            this.model.set(
                {
                    firstname: this.ui.firstname.val(),
                    lastname: this.ui.lastname.val(),
                    email: this.ui.email.val()
                });

            if (this.model.isValid()) {
                this.model.save({
                    success: function () {
                        alert('user update');
                    },
                    error: function () {
                        alert('user not update')
                    }
                });
            }
        }
    }
});
module.exports = EditUserView;