define('library-app/models/contact', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    email: (0, _emberDataAttr['default'])('string'),
    mail: (0, _emberDataAttr['default'])('string'),
    message: (0, _emberDataAttr['default'])('string')
  });
});