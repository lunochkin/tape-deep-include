let test = require('tape');
let sinon = require('sinon');

let deepInclude = require('./deepInclude');

test('deepInclude | should be true', t => {
  let context = ({
    _assert() {}
  });
  let assertSpy = sinon.spy(context, '_assert');

  deepInclude.bind(context)([{o: 1}], {o: 1});

  t.ok(assertSpy.withArgs(true).called, true);

  t.end();
});

test('deepInclude | should be false', t => {
  let context = ({
    _assert() {}
  });
  let assertSpy = sinon.spy(context, '_assert');

  deepInclude.bind(context)([{o: 1}], {o: 2});

  t.ok(assertSpy.withArgs(false).called);

  t.end();
});
