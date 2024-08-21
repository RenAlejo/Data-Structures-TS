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
    remove(index) {
        if (index < 0 || index >= this.size)
            return console.error("Invalid index");
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode === null || removeNode === void 0 ? void 0 : removeNode.value;
    }
    removeValue(value) {
        if (this.isEmpty())
            return console.error("List is empty");
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
    search(value) {
        if (this.isEmpty())
            return -1;
        let current = this.head;
        let index = 0;
        while (current) {
            if ((current === null || current === void 0 ? void 0 : current.value) === value)
                return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    reverse() {
        let previous = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
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
linkedList.insert(11, 0);
linkedList.insert(12, 1);
linkedList.insert(13, 2);
linkedList.insert(14, 3);
linkedList.print();
linkedList.reverse();
linkedList.print();
// linkedList.append(10);
// linkedList.print();
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);
// linkedList.print();
