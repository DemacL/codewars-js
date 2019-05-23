function validBraces(braces) {
    const stack = [];
    for (let i = 0; i < braces.length; i++) {

        if ('[{('.includes(braces[i])) {
            stack.push(braces[i]);
        } else {
            switch (braces[i]) {
                case ')':
                    if (stack.length > 0 && stack[stack.length - 1] === '(') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case ']':
                    if (stack.length > 0 && stack[stack.length - 1] === '[') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.length > 0 && stack[stack.length - 1] === '{') {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
            }
        }
    }

    return stack.length === 0;
}


console.log(validBraces("(){}[]"));