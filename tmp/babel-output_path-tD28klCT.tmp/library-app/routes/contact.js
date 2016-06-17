define('library-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('contact');
    },

    actions: {

      saveMessage: function saveMessage(newMessage) {
        var _this = this;

        console.log('saveMessage');
        newMessage.save().then(function () {
          return _this.transitionTo('/');
        });
      },

      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
      // willTransition() {
      //   // rollbackAttributes() removes the record from the store
      //   // if the model 'isNew'
      //   this.controller.get('model').rollbackAttributes();
      // }
    }
  });
});