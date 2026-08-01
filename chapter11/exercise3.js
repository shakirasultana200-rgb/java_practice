function printValue(number) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0) {
        console.log("Fizz");
    }
    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(number);
    }

}

function fizzBuzz(limit) {

    for (let number = 1; number <= limit; number++) {
        printValue(number);
    }

}

fizzBuzz(30);