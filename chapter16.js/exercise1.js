function reverseString(str) {

    const stack = [];

    for (const ch of str) {
        stack.push(ch);
    }

    let reversed = "";

    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

console.log(reverseString("JavaScript"));