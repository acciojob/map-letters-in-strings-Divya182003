//your JS code here. If required.
function mapLetters(word) {
    const result = {};

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!result[char]) {
            result[char] = [];
        }
        result[char].push(i);
    }

    return result;
}

// Example usage:
console.log(mapLetters("dodo")); 
// Output: { d: [0, 2], o: [1, 3] }

console.log(mapLetters("hello")); 
// Output: { h: [0], e: [1], l: [2, 3], o: [4] }

console.log(mapLetters("a")); 
// Output: { a: [0] }
