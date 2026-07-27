for (let row = 1; row <= 5; row++) {
    let line = "";

    // Print spaces
    for (let space = 1; space <= 5 - row; space++) {
        line += " ";
    }

    // Print stars
    for (let star = 1; star <= (2 * row - 1); star++) {
        line += "*";
    }

    console.log(line);
}
