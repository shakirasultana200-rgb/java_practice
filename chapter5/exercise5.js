function double(n) {
    return n * 2;
}

function applyTwice(fn, value) {
    return fn(fn(value));
}

console.log(applyTwice(double, 5));