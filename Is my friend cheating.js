function removeNb(n) {
    const sum = n * (n + 1) / 2;
    const result = [];
    for (let i = 1; i < n; i++) {
        let other = (sum - i) / (1 + i);
        if (Number.isInteger(other) && other <= n) {
            result.push([i, other]);
        }
    }
    return result;
}

console.log(removeNb(26));
