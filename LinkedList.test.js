// testing environment sets
const LinkedList = require('./LinkedList') // import the linkedlist

// with jest we had the ability to write test and block around them
describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
}) 

// create a describe to get an element from the index
describe('#getByIndex', ()=> {
    // what if the index less than zero
    describe('with index less than 0', () => {
        test('it returns null', ()=> {
            const ll =  LinkedList.fromValues(10, 20) // pass the value 10 as the head and 20 as the next element
            
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })
    // what if the index is greater than the array
    describe('with index greater than list length', () => {
        test('it returns null', ()=> {
            const ll =  LinkedList.fromValues(10, 20) // pass the value 10 as the head and 20 as the next element
            
            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll =  LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(0).value).toBe(10)
        })
    });

    describe('with index in the middle', () => {
        test('it returns the element at that index', () => {
            const ll =  LinkedList.fromValues(10, 20, 30, 40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    });

})

// capabilities to add element in anywhere in the linkedList
describe('#insertAtIndex', ()=> {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(-1, 30)

            expect(ll.length).toBe(2) // ensure its not add any

        })
    })

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(5, 30)

            expect(ll.length).toBe(2) // ensure its not add any

        })
    })

    describe('with index 0', () => {
        test('insert at the head', ()=> {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(0, 30)

            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(10)
            expect(ll.length).toBe(3)
        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', ()=> {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.insertAtIndex(2, 50)

            // get our node by
            const node = ll.getByIndex(2)

            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(ll.length).toBe(5)
        })
    })
})

