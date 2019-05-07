# multiple-define
Define multiple non-enumerable properties

## example
```javascript
import multipleDefine from 'multiple-define'

const foo = {}
const bar = {a: 1, b: 2}

multipleDefine(foo, bar, ['b'])

foo // {b: 2}
bar // {a: 1, b: 2}
```
## multiple-define is an umd module
```javascript
import md from 'multiple-define'
var md2 = require 'multiple-define'

if (window) {
    window.multipleDefine === md === md2  // true
}
```