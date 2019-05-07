var webpack = require('webpack')
var path = require('path')

webpack(
    {
        entry: "./index.js",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            libraryTarget: "umd",
            library: 'multipleDefine',
            libraryExport: "default",
            // globalObject: "this",
            globalObject: 'typeof self !== \'undefined\' ? self : this',
        },
        mode: 'production'
    },
    (err, status) => {
        if (err) console.log(err, status)
    }
)