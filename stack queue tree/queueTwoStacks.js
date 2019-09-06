class QueueTwoStacks {
    constructor() {
     this.stack1 = [];
     this.stack2 = [];
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
            while (this.stack1.length > 0) {
                let p = this.stack1.pop();
                this.stack2.push(p);
            }
        }
        return this.stack2.pop();
    }

}

const queue = new QueueTwoStacks();
console.log(queue);
queue.enqueue(1231231);
console.log(queue);
queue.enqueue("lllllllllll");
queue.enqueue("22222222222");
console.log(queue);
queue.dequeue();
console.log(queue);
