function hasPairWithSum(sorted, target) {

    let left = 0;
    let right = sorted.length - 1;

    while (left < right) {

        const sum = sorted[left] + sorted[right];

        if (sum === target) {
            return true;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return false;
}

console.log(hasPairWithSum([1, 3, 4, 6, 8, 11], 10));