function selReverse(array, length) {
    const res = []
    for (let i = 0; i < array.length; i++) {
        const mod = i % length;
        if (i % length <= length / 2) {
            res[i + mod] = array[i + length - mod - 1]
            res[i + length - mod - 1] = array[i + mod]
            // [array[i + mod], array[i + length - mod - 1]] = [array[i + length - mod - 1], array[i + mod]];
        }
    }
    return res.filter(x => x);;
}
