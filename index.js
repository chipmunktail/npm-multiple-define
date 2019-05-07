function test(obj) {
    var isObj = obj.constructor === Object && typeof obj === 'object'
    if (!isObj) {
        console.error(obj + 'is not an object')
    }
    return isObj
}

export default function (tar, g, strs) {
    if (!test(tar) || !test(g)) {
        return tar
    }
    for (let i of strs) {
        tar[`${i}`] = g[`${i}`]
    }
    return tar
}