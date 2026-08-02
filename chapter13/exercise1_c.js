function sumArray(arr) {

    let sum = 0;

    for (const number of arr) {
        sum += number;
    }

    return sum;
}
console.log(sumArray([10,20,30,40]));