// linked-list (elements are stored in a node)
// a node contains data and a reference to the next node
// linked-lists may be used to implement other data structures

class LLNode {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	size() {
		return this.length;
	}

	getHead() {
		return this.head;
	}

	add(element) {
		const node = new LLNode(element);
		if (this.head === null) {
			this.head = node;
		} else {
			let currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		this.length++;
	}

	remove(element) {
		let currentNode = this.head;
		let previousNode = null;

		while (currentNode && currentNode.element !== element) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		if (!currentNode) return false;

		if (!previousNode) {
			this.head = currentNode.next;
		} else {
			previousNode.next = currentNode.next;
		}

		this.length--;
		return true;
	}

	isEmpty() {
		return this.length === 0;
	}

	indexOf(element) {
		let currentNode = this.head;
		let index = 0;

		while (currentNode) {
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
			index++;
		}

		return -1;
	}

	elementAt(index) {
		if (index < 0 || index >= this.length) return null;

		let currentNode = this.head;
		let count = 0;
		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}
		return currentNode.element;
	}

	addAt(index, element) {
		if (index < 0 || index > this.length) {
			return false;
		}

		const node = new LLNode(element);

		if (index === 0) {
			node.next = this.head;
			this.head = node;
		} else {
			let currentNode = this.head;
			let previousNode;
			let currentIndex = 0;

			while (currentIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				currentIndex++;
			}

			node.next = currentNode;
			previousNode.next = node;
		}

		this.length++;
		return true;
	}

	removeAt(index) {
		if (index < 0 || index >= this.length) return null;

		let currentNode = this.head;
		let previousNode = null;
		let currentIndex = 0;

		if (index === 0) {
			this.head = currentNode.next;
		} else {
			while (currentIndex < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				currentIndex++;
			}
			previousNode.next = currentNode.next;
		}

		this.length--;
		return currentNode.element;
	}
}

const list = new LinkedList();

// Test add
list.add("A");
list.add("B");
list.add("C");
console.log(
	"After adding A, B, C:",
	list.elementAt(0),
	list.elementAt(1),
	list.elementAt(2)
); // A B C

// Test size
console.log("Size:", list.size()); // 3

// Test indexOf
console.log("Index of B:", list.indexOf("B")); // 1

// Test elementAt
console.log("Element at index 2:", list.elementAt(2)); // C

// Test remove
list.remove("B");
console.log("After removing B:", list.elementAt(0), list.elementAt(1)); // A C

// Test addAt
list.addAt(1, "X");
console.log(
	"After adding X at index 1:",
	list.elementAt(0),
	list.elementAt(1),
	list.elementAt(2)
); // A X C

// Test removeAt
console.log("Removed at index 1:", list.removeAt(1)); // X
console.log("After removing at index 1:", list.elementAt(0), list.elementAt(1)); // A C

// Test isEmpty
console.log("Is empty?", list.isEmpty()); // false

// Test remove remaining elements
list.remove("A");
list.remove("C");
console.log("Is empty after removing all?", list.isEmpty()); // true
