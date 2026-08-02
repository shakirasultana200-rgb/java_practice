const sentence = "I like JavaScript I like coding";

const words = sentence.split(" ");

const wordCount = new Map();

for (const word of words) {

    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
    }
    else {
        wordCount.set(word, 1);
    }

}

console.log(wordCount);