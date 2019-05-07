var fz = require('../dist/bundle')

var foo = {},
    bar = {a:1};

fz.default(foo, bar, ['a'])

console.log(foo, bar)