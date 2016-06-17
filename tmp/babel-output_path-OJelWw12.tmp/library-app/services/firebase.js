define('library-app/services/firebase', ['exports', 'emberfire/services/firebase', 'library-app/config/environment'], function (exports, _emberfireServicesFirebase, _libraryAppConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _libraryAppConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});