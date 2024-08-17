"use strict";
class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    prepend(value) {
        const node = new NodeClass(value);
        if (!this.isEmpty())
            node.next = this.head;
        this.head = node;
        this.size++;
    }
    append(value) {
        const node = new NodeClass(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value, index) {
        if (index < 0 || index > this.size)
            return console.error("Invalid index");
        if (index === 0) {
            this.prepend(value);
        }
        else {
            const node = new NodeClass(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    print() {
        if (this.isEmpty())
            return console.error("List is empty");
        let current = this.head;
        let listValues = "";
        while (current) {
            listValues += `${current.value} -> `;
            current = current.next;
        }
        console.log(listValues);
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}
const linkedList = new LinkedList();
console.log("List is empty?: ", linkedList.isEmpty());
console.log("List size: ", linkedList.size);
linkedList.print();
linkedList.insert(10, 0);
linkedList.insert(12, 1);
linkedList.print();
// linkedList.append(10);
// linkedList.print();
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);
// linkedList.print();
