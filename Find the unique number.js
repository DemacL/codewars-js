function findUniq(arr) {
    if (arr[0] === arr[1]) {
        return arr.find(x => x !== arr[0])
    } else {
        return arr[0] === arr[2] ? arr[1] : arr[0];
    }
}
