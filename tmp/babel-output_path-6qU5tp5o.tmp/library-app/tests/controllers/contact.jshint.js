define('library-app/tests/controllers/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/contact.js should pass jshint.\ncontrollers/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/contact.js: line 18, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 19, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 20, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 21, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 22, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/contact.js: line 23, col 37, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
  });
});