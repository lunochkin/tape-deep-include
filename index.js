let test = require('tape');
let deepEqual = require('deep-equal');
let defined = require('defined');


test.Test.prototype.deepInclude = function (actual, expected, msg, extra) {
  let isEqual = actual.some(one => {
    return deepEqual(one, expected, {strict: true});
  });
  this._assert(isEqual, {
    message: defined(msg, 'should include item'),
    operator: 'deepInclude',
    actual,
    expected,
    extra
  });
};
