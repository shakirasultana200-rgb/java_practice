function bubbleSort(arr) {

    const a = [...arr];

    for (let i = 0; i < a.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < a.length - 1 - i; j++) {

            if (a[j] > a[j + 1]) {

                [a[j], a[j + 1]] = [a[j + 1], a[j]];

                console.log("After swap:", a);

                swapped = true;
            }

        }

        if (!swapped) break;
    }

    return a;
}

console.log("Final:", bubbleSort([3, 1, 2]));