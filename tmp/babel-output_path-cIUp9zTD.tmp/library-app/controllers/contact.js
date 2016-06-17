define('library-app/controllers/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    email: '',
    name: '',
    message: '',

    isEmailValid: _ember['default'].computed.match('model.email', /^.+@.+\..+$/),
    isNameValid: _ember['default'].computed.gte('model.name.length', 0),
    isMessageValid: _ember['default'].computed.gte('model.message.length', 5),

    isDisabled: _ember['default'].computed('isEmailValid', 'isMessageValid', 'isNameValid', function () {
      return !(this.get('isEmailValid') && this.get('isMessageValid') && this.get('isNameValid'));
    }),
    actions: {

      testController: function testController(newMessage) {
        console.log('TEST VALIDATION newMessage: ');
        // console.log(newMessage);

        // const name = this.get('model.name');
        // console.log('name: ');
        // console.log(name);

        // console.log('this.get(email)');
        // console.log('this.get(message)');

        // console.log(this.get('email'));
        // console.log(this.get('name'));
        // console.log(this.get('message'));

        console.log('isEmailValid');
        console.log(this.get('isEmailValid'));

        console.log('isMessageValid');
        console.log(this.get('isMessageValid'));

        console.log('isNameValid');
        console.log(this.get('isNameValid'));
      }

    }

  });
});
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