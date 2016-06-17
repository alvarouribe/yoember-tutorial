import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveMessage(newMessage) {
      console.log('saveMessage');
      newMessage.save().then(() => this.transitionTo('/'));
    },

    willTransition() {
      let model = this.controller.get('model');

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