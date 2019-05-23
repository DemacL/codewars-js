


function longestPalindrome(str) {
    let charSum2darray = [...str.toLowerCase()].reduce(
        (m, c) => {
            if (/[a-z0-9]/.test(c)) {
                m.set(c, (m.get(c) || 0) + 1)
            }
            return m
        }, new Map());
    let plusOneFlag = false;
    return [...charSum2darray].reduce((sum, x) => {
        if (x[1] >= 2) {
            if (x[1] % 2 === 0) {
                sum += x[1]
            } else {
                sum += x[1] - 1
                plusOneFlag = true;
            }
        } else {
            plusOneFlag = true;
        }
        return sum;
    }, 0) + (plusOneFlag ? 1 : 0)
}

longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_")


