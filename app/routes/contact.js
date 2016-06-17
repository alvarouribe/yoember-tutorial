import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    saveMessage(newMessage) {

      newMessage.save().then((response) => {
        console.log('Route newMessage.save() response');
        console.log(response);
        this.transitionTo('/');
      });
    
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }

  }
});