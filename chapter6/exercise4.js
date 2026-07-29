const numbers = [2, 5, 8, 9, 10, 13, 16];

const evenCount = numbers.reduce((count, number) => {
    if (number % 2 === 0) {
        return count + 1;
    }
    return count;
}, 0);

console.log("Even Numbers:", evenCount);