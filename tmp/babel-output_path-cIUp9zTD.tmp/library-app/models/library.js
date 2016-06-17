define('library-app/models/library', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({
    name: (0, _emberDataAttr['default'])('string'),
    address: (0, _emberDataAttr['default'])('string'),
    phone: (0, _emberDataAttr['default'])('string')
  });
});