// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('history', (church, age) => {
  console.log(`some other logic here ${church} ${age}`)
})

customEmitter.emit('response', 'john', 34)
customEmitter.emit('history', 'Watchman', 90)