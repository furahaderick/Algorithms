// hash-tables (key-value pairs which are fast O(n) complexity)

// JS objects are natively hash-tables
// JS Maps provide more robust hash-table implementations

// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Alice");
myMap.set(123, "a number key");
myMap.set({ id: 1 }, "an object key");

// Get values by key
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get(123)); // Output: a number key

// Check if a key exists
console.log(myMap.has("name")); // Output: true

// Get the size of the Map
console.log(myMap.size); // Output: 3

// Iterate over the Map
for (const [key, value] of myMap) {
	console.log(`${key}: ${value}`);
}

// Delete a key-value pair
myMap.delete("name");
console.log(myMap.size); // Output: 2

// Clear the entire Map
myMap.clear();
console.log(myMap.size); // Output: 0
