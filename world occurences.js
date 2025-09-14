function countWords(input) {
    let wordMap = new Map();

    for (let word of input) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }

    // Convert Map to Array and sort by count (descending)
    let sorted = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}


countWords(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])







