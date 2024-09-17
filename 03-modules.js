// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
console.log(names)
const sayHifunction = require('./05-utils')
const data = require('./06-alternative-flavour')
const sentiment = " Quite Right"
const addValues = require('./07-mind-grenade')

const trial = addValues() + sentiment

console.log(trial)
// sayHifunction('susan')
// sayHifunction(names.john)
// sayHifunction(names.peter)
// console.log(data)