define('emberfire/services/firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  exports['default'] = {
    create: function create() {
      return new _firebase['default'](this.config.firebase);
    },

    config: null,
    isServiceFactory: true
  };
});