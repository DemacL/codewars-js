function deleteNth(arr, n) {
    const obj = {};
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        if ((obj[arr[i]] || 0) > n) {
            continue;
        }
        res.push(arr[i]);
    }
    return res;
}