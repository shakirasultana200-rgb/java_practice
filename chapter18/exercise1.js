class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {

    root = null;

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
}

const tree = new BST();

[15, 10, 20, 8, 12].forEach((v) => tree.insert(v));

console.log(tree.root.value);          // 15
console.log(tree.root.left.value);     // 10
console.log(tree.root.right.value);    // 20
console.log(tree.root.left.left.value); // 8
console.log(tree.root.left.right.value); // 12