// tree structure (nodes connected by edges, non-linear)

// binary tree: A node can have 2 max child nodes
// binary search tree: Nodes are ordered (each left child is lte to the parent, and the right child is gte to the parent)
// Ways to traverse (loop through): in-order, pre-order, post-order, level-order

class BSTNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	addNode(data) {
		let newNode = new BSTNode(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.placeNode(this.root, newNode);
		}
	}

	placeNode(node, newNode) {
		if (newNode.data < node.data) {
			// place item on the left side
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.placeNode(node.left, newNode);
			}
		} else {
			// place item on the right side
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.placeNode(node.right, newNode);
			}
		}
	}

	findMin(node = this.root) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMin(node.left);
		}
	}

	findMax(node = this.root) {
		if (node.right === null) {
			return node;
		} else {
			return this.findMax(node.right);
		}
	}

	find(data) {
		let current = this.root;
		while (current) {
			if (current.data === data) {
				return current;
			}
			if (current.data > data) {
				// search the left
				current = current.left;
			} else {
				// search the right
				current = current.right;
			}
		}
		return null;
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, data) {
		if (node === null) {
			return null;
		}
		if (node.data === data) {
			if (node.left === null && node.right === null) {
				// Return what should replace the node to be removed
				return null;
			}

			// If node has no left child
			if (node.left === null) {
				return node.right;
			}

			// If node has no right child
			if (node.right === null) {
				return node.left;
			}

			// If node has children on both sides
			let tempNode = this.findMin(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;
		} else if (node.data > data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	}
}

const tree = new BST();
tree.addNode(50);
tree.addNode(30);
tree.addNode(70);
tree.addNode(20);
tree.addNode(40);
tree.addNode(60);
tree.addNode(80);

console.log("Min:", tree.findMin().data); // should print 20
console.log("Max:", tree.findMax().data); // should print 80
console.log("Find 40:", tree.find(40)); // should print BSTNode with data 40
console.log("Find 100:", tree.find(100)); // should print null

tree.remove(40);
console.log("Find 40 (after removal):", tree.find(40)); // should print null

export default BST;
