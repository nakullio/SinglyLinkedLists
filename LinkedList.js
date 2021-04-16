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

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// helper function test environment
LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    // loop the value in reverse order
    for(let i = values.length -1; i >= 0; i--) {
        ll.insertAtHead(values[i])
    }
    return ll
}

module.exports = LinkedList