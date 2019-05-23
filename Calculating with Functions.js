function zero(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 0 + +args[0].slice(1)
            case '-':
                return 0 - +args[0].slice(1)
            case '*':
                return 0 * +args[0].slice(1)
            case '/':
                return ~~(0 / +args[0].slice(1))
        }
    } else {
        return 0;
    }
}
function one(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 1 + +args[0].slice(1)
            case '-':
                return 1 - +args[0].slice(1)
            case '*':
                return 1 * +args[0].slice(1)
            case '/':
                return ~~(1 / +args[0].slice(1))
        }
    } else {
        return 1;
    }
}

function two(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 2 + +args[0].slice(1)
            case '-':
                return 2 - +args[0].slice(1)
            case '*':
                return 2 * +args[0].slice(1)
            case '/':
                return ~~(2 / +args[0].slice(1))
        }
    } else {
        return 2;
    }
}

function three(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 3 + +args[0].slice(1)
            case '-':
                return 3 - +args[0].slice(1)
            case '*':
                return 3 * +args[0].slice(1)
            case '/':
                return ~~(3 / +args[0].slice(1))
        }
    } else {
        return 3;
    }
}
function four(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 4 + +args[0].slice(1)
            case '-':
                return 4 - +args[0].slice(1)
            case '*':
                return 4 * +args[0].slice(1)
            case '/':
                return ~~(4 / +args[0].slice(1))
        }
    } else {
        return 4;
    }
}
function five(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 5 + +args[0].slice(1)
            case '-':
                return 5 - +args[0].slice(1)
            case '*':
                return 5 * +args[0].slice(1)
            case '/':
                return ~~(5 / +args[0].slice(1))
        }
    } else {
        return 5;
    }
}
function six(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 6 + +args[0].slice(1)
            case '-':
                return 6 - +args[0].slice(1)
            case '*':
                return 6 * +args[0].slice(1)
            case '/':
                return ~~(6 / +args[0].slice(1))
        }
    } else {
        return 6;
    }
}
function seven(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 7 + +args[0].slice(1)
            case '-':
                return 7 - +args[0].slice(1)
            case '*':
                return 7 * +args[0].slice(1)
            case '/':
                return ~~(7 / +args[0].slice(1))
        }
    } else {
        return 7;
    }
}
function eight(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 8 + +args[0].slice(1)
            case '-':
                return 8 - +args[0].slice(1)
            case '*':
                return 8 * +args[0].slice(1)
            case '/':
                return ~~(8 / +args[0].slice(1))
        }
    } else {
        return 8;
    }
}
function nine(...args) {
    if (args.length == 1) {
        switch (args[0][0]) {
            case '+':
                return 9 + +args[0].slice(1)
            case '-':
                return 9 - +args[0].slice(1)
            case '*':
                return 9 * +args[0].slice(1)
            case '/':
                return ~~(9 / +args[0].slice(1))
        }
    } else {
        return 9;
    }
}

function plus(num) {
    return '+' + num
}
function minus(num) {
    return '-' + num
}
function times(num) {
    return '*' + num
}
function dividedBy(num) {
    return '/' + num
}

console.log(  eight(dividedBy(three())) );