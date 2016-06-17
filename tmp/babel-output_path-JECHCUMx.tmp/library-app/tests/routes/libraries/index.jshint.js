define('library-app/tests/routes/libraries/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/index.js should pass jshint.\nroutes/libraries/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});