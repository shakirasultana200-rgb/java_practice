function isBalanced(str) {

    const stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const ch of str) {

        if ("([{".includes(ch)) {
            stack.push(ch);
        } else if (")]}".includes(ch)) {

            if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("(a[b]{c})"));
console.log(isBalanced("(a[b)]"));