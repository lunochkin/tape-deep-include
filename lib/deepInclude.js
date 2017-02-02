let deepEqual = require('deep-equal');
let defined = require('defined');


module.exports = function (actual, expected, msg, extra) {
  let isEqual = actual.some(one => deepEqual(one, expected, {strict: true}));
  this._assert(isEqual, {
    message: defined(msg, 'should include item'),
    operator: 'deepInclude',
    actual,
    expected,
    extra
  });
};
