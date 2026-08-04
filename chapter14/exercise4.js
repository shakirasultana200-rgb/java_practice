function countOccurrences(arr, target) {

    let count = 0;

    for (const number of arr) {

        if (number === target) {
            count++;
        }

    }

    return count;
}

console.log(countOccurrences([2, 5, 2, 8, 2, 10], 2));