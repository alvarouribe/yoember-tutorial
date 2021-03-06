define('library-app/controllers/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    emailAddress: '',
    name: '',
    message: '',

    isEmailValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),
    isNameValid: _ember['default'].computed.gte('name.length', 0),
    isMessageValid: _ember['default'].computed.gte('message.length', 5),

    isDisabled: _ember['default'].computed('isEmailValid', 'isMessageValid', 'isNameValid', function () {
      return !(this.get('isEmailValid') && this.get('isMessageValid') && this.get('isNameValid'));
    }),
    actions: {
      sendMessage: function sendMessage() {
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
});