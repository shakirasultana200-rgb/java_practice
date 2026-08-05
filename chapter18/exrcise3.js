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

function countNodes(node) {
    if (node === null) {
        return 0;
    }

    return 1 + countNodes(node.left) + countNodes(node.right);
}

const tree = new BST();

[15, 10, 20, 8, 12].forEach(v => tree.insert(v));

console.log(countNodes(tree.root));