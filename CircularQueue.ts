class CircularQueue <T> { 

    private queue: any[];
    private capacity: number;
    private currentLength: number;
    private rear: number;
    private front: number;

    constructor(private cap: number) {
        this.queue = new Array<T>(cap);
        this.capacity = cap;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(value: T): string | void {
        if(this.isFull()) return console.error("Queue is full");
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.currentLength += 1;
        if(this.front === -1) this.front = this.rear;
    }
    dequeue(): T {
        this.checkEmpty();
        const value = this.queue[this.front];
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return value;
    }

    peek(): T {
        this.checkEmpty();
        return this.queue[this.front];
    }

    print(): void {
        this.checkEmpty();
        let i;
        let str = '';
        for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
            str += this.queue[i] + ' ';
        }
        str += this.queue[i];
        console.log(str);
    }

    checkEmpty(): string | void {
        if(this.isEmpty()) return console.error("Queue is empty");
    }
    isFull(): boolean {
        return this.currentLength === this.capacity;
    }
    isEmpty(): boolean {
        return this.currentLength === 0;
    }

}

const circularQueue = new CircularQueue<number>(5);
console.log('Is empty: ', circularQueue.isEmpty());

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.print();

console.log(circularQueue.dequeue());
console.log('Peeks: ', circularQueue.peek());
circularQueue.print();
circularQueue.enqueue(60);
circularQueue.print();



