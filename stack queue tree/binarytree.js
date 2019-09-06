class BinarySearchTree{
    constructor(){
        this._root = null;
    }

    add(value){
        let node = {
                value: value,
                left: null,
                right: null
            },

            current;

        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;

            while(true){

                if (value < current.value){

                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                } else if (value > current.value){

                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }

                } else {
                    break;
                }
            }
        }
    }

    contains(value){
       let found       = false,
            current     = this._root;

        while(!found && current){

            if (value < current.value){
                current = current.left;

            } else if (value > current.value){
                current = current.right;

            } else {
                found = true;
            }
        }
        console.log(found);
        // return found;
    }

    remove(value){
    }

}


var tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(1);
tree.add(7);
tree.add(40);
tree.add(50);
tree.add(60);
tree.contains(1);
console.log(tree);



