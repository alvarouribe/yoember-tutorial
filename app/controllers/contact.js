import Ember from 'ember';

export default Ember.Controller.extend({

  email: '',
  name: '',
  message: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isNameValid:   Ember.computed.gte('name.length', 0),
  isMessageValid: Ember.computed.gte('message.length', 5),


  isDisabled: Ember.computed('isEmailValid', 'isMessageValid', 'isNameValid', function() {
  	return !((this.get('isEmailValid')) && (this.get('isMessageValid')) && (this.get('isNameValid'))); 
	}),
	actions: {
		
	}	

});

