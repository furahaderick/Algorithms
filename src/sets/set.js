// sets (no duplicates, unordered)

// functions: has, add, remove, union, intersection, difference, subset

// applications: membership testing

// PS You can use JS built-in Set class

class MySet {
	constructor() {
		this.collection = [];
	}

	has(element) {
		return this.collection.indexOf(element) !== -1;
	}

	values() {
		return this.collection;
	}

	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			return true;
		}
		return false;
	}

	remove(element) {
		if (this.has(element)) {
			index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			return true;
		}
		return false;
	}
}

export default MySet;
