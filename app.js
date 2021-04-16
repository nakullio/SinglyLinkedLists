//  for visual the work we doing
const LinkedList = require('./LinkedList')

const ll = LinkedList.fromValues(10, 20, 30, 40)
ll.print()

// console log for see how to get the first element
// console.log(ll.getByIndex(2).value)
ll.removeAtIndex(2)
ll.print()