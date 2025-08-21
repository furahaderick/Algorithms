// stacks (lifo structure)

// functions: push, pop, peek, length

// applications: browser history, palindrome checkers

class Stack {
	constructor() {
		this.items = {};
		this.count = 0;
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	push(item) {
		this.items[this.count] = item;
		this.count++;
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		let result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek() {
		return this.items[this.count - 1];
	}
}

export default Stack;
