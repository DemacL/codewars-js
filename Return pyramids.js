function pyramid(n) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        res += `${' '.repeat(n - i)}/${(i === n   ? '_' : ' ').repeat((i-1) * 2)}\\\n`
    }
    return res
}

console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(5));
console.log(pyramid(10));
console.log(pyramid(20));