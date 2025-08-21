// Palindrome checker
import Stack from "./stack.js";

let letters = new Stack();
let word = process.argv[2] || "Bob";
let rword = "";

// Lower the case to ignore it in input word
let lowerCaseWord = word.toLowerCase();

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
	letters.push(lowerCaseWord[i]);
}

// pop off stack in reverse order
for (let i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (lowerCaseWord === rword) {
	console.log(`${word} is an anagram`);
} else {
	console.log(`${word} is not an anagram`);
}
