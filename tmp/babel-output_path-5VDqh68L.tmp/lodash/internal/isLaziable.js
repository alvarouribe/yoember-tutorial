define('lodash/internal/isLaziable', ['exports', 'lodash/internal/LazyWrapper', 'lodash/internal/getData', 'lodash/internal/getFuncName', 'lodash/chain/lodash'], function (exports, _lodashInternalLazyWrapper, _lodashInternalGetData, _lodashInternalGetFuncName, _lodashChainLodash) {
  'use strict';

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
   */
  function isLaziable(func) {
    var funcName = (0, _lodashInternalGetFuncName['default'])(func);
    if (!(funcName in _lodashInternalLazyWrapper['default'].prototype)) {
      return false;
    }
    var other = _lodashChainLodash['default'][funcName];
    if (func === other) {
      return true;
    }
    var data = (0, _lodashInternalGetData['default'])(other);
    return !!data && func === data[0];
  }

  exports['default'] = isLaziable;
});