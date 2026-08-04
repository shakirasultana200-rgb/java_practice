function linearSearch(arr, target) {

    let comparisons = 0;

    for (let i = 0; i < arr.length; i++) {

        comparisons++;

        if (arr[i] === target) {
            return comparisons;
        }

    }

    return comparisons;
}

console.log(linearSearch([7, 3, 9, 12], 9));