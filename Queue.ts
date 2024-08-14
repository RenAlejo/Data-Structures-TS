
class Queue<T> { 

    items: {[key: number]: T};
    rear: number;
    front: number;

    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element: T){
        this.items[this.rear] = element;
        this.rear++;    
    }

    dequeue(){
       const item = this.items[this.front];
       delete this.items[this.front];
       this.front++;
       return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log('Queue:', this.items);
    }

}


const queue = new Queue<number>();
console.log('Is Empty:', queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log('Dequeue:', queue.dequeue());
console.log(queue.peek());