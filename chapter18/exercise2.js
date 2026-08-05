class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    insert(value) {

        const node = new TreeNode(value);

        if (!this.root) {
            this.root = node;
            return;
        }

        let cur = this.root;

        while (true) {

            if (value < cur.value) {

                if (!cur.left) {
                    cur.left = node;
                    return;
                }

                cur = cur.left;

            } else {

                if (!cur.right) {
                    cur.right = node;
                    return;
                }

                cur = cur.right;
            }
        }
    }

    min() {

        let cur = this.root;

        while (cur.left) {
            cur = cur.left;
        }

        return cur.value;
    }
}

const tree = new BST();

[15, 10, 20, 8, 12].forEach(v => tree.insert(v));

console.log(tree.min());