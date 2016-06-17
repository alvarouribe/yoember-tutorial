import Ember from 'ember';

export default Ember.Controller.extend({

  email: '',
  name: '',
  message: '',

  isEmailValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isNameValid:   Ember.computed.gte('model.name.length', 0),
  isMessageValid: Ember.computed.gte('model.message.length', 5),


  isDisabled: Ember.computed('isEmailValid', 'isMessageValid', 'isNameValid', function() {
  	return !((this.get('isEmailValid')) && (this.get('isMessageValid')) && (this.get('isNameValid'))); 
	}),
	actions: {

		testController(newMessage) {
      console.log('TEST VALIDATION newMessage: ');
      console.log('isEmailValid');
      console.log(this.get('isEmailValid'));

      console.log('isMessageValid');
      console.log(this.get('isMessageValid'));

      console.log('isNameValid');
      console.log(this.get('isNameValid'));
    },
    // sendMessage() {
    //   console.log('CONTROLLER sendMessage newMessage: ');
    //   console.log(newMessage);
      ////////////////////////
      // THIS FORM WORKS TO      
      ////////////////////////
      // const email = this.get('emailAddress');
      // const name = this.get('name');
      // const message = this.get('message');
      // const newContact = this.store.createRecord('contact', { 
      //   email: email, 
      //   name: name, 
      //   message: message 
      // });
      // newContact.save().then((response) => {
      //   alert('New contact saved. Response back!');
      //   console.log(response);
      // });

		// }
	}	

});

