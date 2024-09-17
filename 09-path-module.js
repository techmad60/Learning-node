const path = require('path')

console.log(path.sep)

const filePath = path.join('/Documents/', 'Learning-Node', '09-path-module.js')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'Learning-Node', '09-path-module.js')
console.log(absolute)