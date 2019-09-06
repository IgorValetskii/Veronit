class Stack{
    constructor(){
    this._values = [];
    }

    push(value){
        this._values.push(value);
    }

    pop(){
        return this._values.pop();
    }
}

const stack = new Stack();
console.log(stack);
stack.push(123);
stack.push(456);
console.log(stack);
stack.pop();
console.log(stack);







