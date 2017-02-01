#tape-deep-include

tape deepInclude assertion

example

```
var test = require('tape');
require('tape-deep-include');

function testable() {
  return [
    {one: 1},
    {two: 2}
  ]
}

test('testable test', function (t) {
  t.deepInclude(testable(), {one: 1});
  t.end();
});
```

