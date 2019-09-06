class Queue {
    constructor() {
        this._data = [];
    }
    enqueue(v) {
        this._data.push(v);
    }
    dequeue() {
        return this._data.shift();
    }
    isEmpty() {
        return this._data.length === 0;
    }
    size() {
        return this._data.length;
    }
    clear() {
        this._data.length = 0;
    }
}

class PriorityQueue extends Queue {
    enqueue(v) {
        if (typeof (v) !== "object") {
            throw new Error (`Ожидается объект, а получен ${typeof (v)}`);
        } else if (v.priority === undefined) {
            throw new Error ("У объекта отсутствует поле priority");
        } else {
            super.enqueue(v);
        }
    }

    dequeue() {
        let priority = this._data[0].priority;
        let pos = 0;
        this._data.forEach((o, i) => {
            if (o.priority > priority) {
                priority = o.priority;
                pos = i;
            }
        });
        return this._data.splice(pos, 1)[0];
    }
}

let a = new PriorityQueue();
a.enqueue({a:123, b:456, priority:10});
a.enqueue({priority: 20});
a.enqueue({priority:1});

a.dequeue();

console.log(a);