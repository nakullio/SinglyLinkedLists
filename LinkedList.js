class LinkedList {
    // pass with no values as default empty linkedlist
    constructor() {
        this.head = null // as the pointer references
        this.length = 0// for keep track our linkedlist to track value position, easire looping through
    }

    // add element to begining of the lists
    insertAtHead(data) {
        // replace current head and add to the LinkedListNode
        const newNode = new LinkedListNode(data, this.head)
        // set the current head to newNode
        this.head = newNode
        this.length++
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList