import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  name: '',
  message: '',

  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isNameValid:   Ember.computed.gte('name.length', 0),
  isMessageValid: Ember.computed.gte('message.length', 5),


  isDisabled: Ember.computed('isEmailValid', 'isMessageValid', 'isNameValid', function() {
  	return !((this.get('isEmailValid')) && (this.get('isMessageValid')) && (this.get('isNameValid'))); 
	}),
	actions: {
		sendMessage() {
  	console.log('SEND: ');

  	console.log('isEmailValid');
  	console.log(this.get('isEmailValid'));

		console.log('isMessageValid');
		console.log(this.get('isMessageValid'));

		console.log('isNameValid');
		console.log(this.get('isNameValid'));

		}
	}	

});

