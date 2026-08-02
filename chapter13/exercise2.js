function findMax(arr) {

    let max = arr[0];

    for (const number of arr) {

        if (number > max) {
            max = number;
        }

    }

    return max;
}

console.log(findMax([4, 9, 2, 7, 5]));