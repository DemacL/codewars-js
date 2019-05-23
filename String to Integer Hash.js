// hashCode(s) = s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
hashCode = function (str) {
    const n = str.length;
    let code = 0;
    for (let i = 0; i < n; i++) {
        code += Math.pow(str[i].charCodeAt() * 31, n - i - 1)
    }
    return code;
}