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

        // to loop through all the element, get the current element first
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next

        }
        return current
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)

        const prev = this.getByIndex(index - 1)
        if(prev == null) return null

        // take the prev.next into new node
        prev.next = new LinkedListNode(value, prev.next)
        this.length++
    }

    // helper function for print the linkedList
    print() {
        let output = '' // we leave empty dtring for default print
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> ` // to styled them in good way
            current = current.next
        }
        console.log(`${output}null`)
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