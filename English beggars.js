

function beggars(values, n) {
    return values.reduce((res, num, i) => {
        let index = i % n;
        res[index] = res[index] + num;
        return res
    }, Array.from({ length: n }, _ => 0))
}