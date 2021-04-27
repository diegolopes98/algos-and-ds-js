class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            const oldFirst = this.first;
            this.first = node;
            this.first.next = oldFirst;
        }

        return ++this.length;
    }

    pop() {
        if(!this.first) return null;
        const popped = this.first;
        if(this.first === this.last) this.last = null;
        this.first = popped.next;
        this.length--;
        return popped.val;
    }

    size() {
        return this.length;
    }

}