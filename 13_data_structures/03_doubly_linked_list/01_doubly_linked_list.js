class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let curr = this.head
        while(curr) {
            console.log(curr.val);
            curr = curr.next
        }
    }

    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++;

        return this;
    }

    pop() {
        if(!this.head) return;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }
    
    shift() {
        if(!this.head) return

        const shifted = this.head;
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shifted.next
            this.head.prev = null;
            shifted.next = null;
        }

        this.length--;
        return shifted;
    }

    unshift(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++
        return this
    }
}

const list = new DoublyLinkedList();
console.log(list);