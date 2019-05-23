function SeriesSum(n) {
    let sum = 0;
    let i = 1;
    while (n--) {
        sum += 1 / i;
        i += 3;
    }
    return sum.toFixed(2);
}