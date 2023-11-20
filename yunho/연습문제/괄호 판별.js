function validBraces(braces) {
    const bList = { "(": ")", "{": "}", "[": "]" };

    const verify = braces.split('').reduce((stack, current) => {
        if (current === bList[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(current);
        }
        return stack;
    }, []);

    // Return the last element of the verify array if it's not empty
    return verify.length === 0 ? true : verify[verify.length - 1];
}

console.log(validBraces("[]([[]){}"));  // Output: ]
