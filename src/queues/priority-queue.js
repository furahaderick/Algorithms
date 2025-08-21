// priority-queues (elements are associated with a priority value)
// Element with high priority is removed first eg item with 5 is sent at the front, before items with 4,3,2,1.

import Queue from "./queue.js";

class PQItem {
	constructor(item, priority) {
		this.item = item;
		this.priority = priority;
	}
}

class PriorityQueue extends Queue {
	enqueue(item, priority) {
		let qItem = new PQItem(item, priority);

		if (this.isEmpty()) {
			this.items.push(qItem);
		} else {
			let added = false;
			for (let i = 0; i < this.items.length; i++) {
				if (qItem.priority < this.items[i].priority) {
					this.items.splice(i, 0, qItem);
					added = true;
					break;
				}
			}

			if (!added) {
				this.items.push(qItem);
			}
		}
	}
}

export default PriorityQueue;
