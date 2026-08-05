function selectionSort(arr) {

    const a = [...arr];

    let comparisons = 0;

    for (let i = 0; i < a.length - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < a.length; j++) {

            comparisons++;

            if (a[j] < a[minIndex]) {
                minIndex = j;
            }

        }

        if (minIndex !== i) {
            [a[i], a[minIndex]] = [a[minIndex], a[i]];
        }

    }

    console.log("Comparisons:", comparisons);

    return a;
}

selectionSort([5, 4, 3, 2, 1]);
selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
selectionSort([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);