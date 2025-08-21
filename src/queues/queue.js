// queue (fifo structure)

// functions: enqueue, dequeue, peek, size, isEmpty, etc

class Queue {
	constructor() {
		this.items = [];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	enqueue(item) {
		this.items.push(item);
	}

	dequeue() {
		return this.items.shift();
	}

	peek() {
		return this.items[0];
	}

	size() {
		return this.items.length;
	}

	reverse() {
		let reversed = [];

		while (this.items.length > 0) {
			reversed.push(this.items.pop());
		}

		this.items = reversed;
		return this.items;
	}
}

export default Queue;

// Creating a new instance of our class
const result = new Queue();

// Adding elements
result.enqueue(5);
result.enqueue(3);
result.enqueue(4);
result.enqueue(7);
console.log("After adding elements:", result.items);

// Removing an element
result.dequeue();
console.log("After removing an element:", result.items);

// Checking the first element in the queue
console.log("After peeking:", result.peek());

// Reversing the queue
console.log("After reversing the queue:", result.reverse());
