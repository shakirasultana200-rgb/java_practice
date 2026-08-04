function binarySearch(arr, target) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        console.log("Low =", low, "Mid =", mid, "High =", high);

        if (arr[mid] === target) {
            console.log("Found at index", mid);
            return mid;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    console.log("Target not found");
    return -1;
}

const sorted = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

binarySearch(sorted, 91);