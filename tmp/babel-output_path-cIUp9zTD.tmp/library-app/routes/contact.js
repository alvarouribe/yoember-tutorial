define('library-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('contact');
    },

    actions: {

      saveMessage: function saveMessage(newMessage) {
        var _this = this;

        newMessage.save().then(function (response) {
          console.log('Route newMessage.save() response');
          console.log(response);
          _this.transitionTo('/');
        });
      },

      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }

    }
  });
});