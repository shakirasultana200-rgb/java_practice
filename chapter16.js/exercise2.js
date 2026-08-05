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
        }
        else if (")]}".includes(ch)) {

            if (stack.pop() !== pairs[ch]) {
                return false;
            }

        }

    }

    return stack.length === 0;
}

console.log(isBalanced("function test(){ return [1,2,3]; }"));
console.log(isBalanced("function test(){ return [1,2,3); }"));