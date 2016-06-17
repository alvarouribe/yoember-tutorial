define('emberfire/torii-providers/firebase', ['exports', 'ember', 'emberfire/mixins/waitable'], function (exports, _ember, _emberfireMixinsWaitable) {
  'use strict';

  exports['default'] = _ember['default'].Object.extend(_emberfireMixinsWaitable['default'], {
    firebase: _ember['default'].inject.service(),

    open: function open(options) {
      var provider = options.provider || options.authWith;
      var reject = _ember['default'].RSVP.reject;

      if (!provider) {
        return reject(new Error('`provider` must be supplied'));
      }

      var ref = this.get('firebase');

      switch (provider) {
        case 'password':
          if (!options.email && !options.password) {
            return reject(new Error('`email` and `password` must be supplied'));
          }

          return this._toPromise(ref, 'authWithPassword', {
            email: options.email,
            password: options.password
          });

        case 'custom':
          if (!options.token) {
            return reject(new Error('A token must be supplied'));
          }

          return this._toPromise(ref, 'authWithCustomToken', options.token);

        case 'anonymous':
          return this._toPromise(ref, 'authAnonymously');

        // oauth providers e.g. 'twitter'
        default:
          var providerSettings = options.settings || {};
          if (options.redirect === true) {
            // promise will never resolve unless there is an error
            return this._toPromise(ref, 'authWithOAuthRedirect', provider, providerSettings);
          }
          return this._toPromise(ref, 'authWithOAuthPopup', provider, providerSettings);
      }
    },

    /**
     * Promisify auth methods, and
     * @param  {Firebase} ref
     * @param  {String} method
     * @param  {Object|String} [param]
     * @param  {Object} [options]
     * @return {Promise}
     */
    _toPromise: function _toPromise(ref, method, param, options) {
      var _this = this;

      this._incrementWaiters();

      return new _ember['default'].RSVP.Promise(function (resolve, reject) {

        var onComplete = function onComplete(error, authData) {
          _this._decrementWaiters();
          if (error) {
            reject(error);
          } else {
            resolve(authData);
          }
        };

        var args = [];

        if (typeof param !== 'undefined') {
          args.push(param);
        }

        args.push(onComplete);

        if (typeof options !== 'undefined') {
          args.push(options);
        }

        ref[method].apply(ref, args);
      });
    }
  });
});