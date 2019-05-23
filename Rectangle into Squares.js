function sqInRect(lng, wdth) {
    if (lng !== wdth) {
        const res = [];
        const arr = [lng, wdth];
        arr.sort((x, y) => x - y)
        while (arr[1] % arr[0] !== 0) {
            res.push(arr[0]);
            arr[1] = arr[1] - arr[0];
            arr.sort((x, y) => x - y)
        }
        res.push(...Array(arr[1] / arr[0]).fill(arr[0]));
        return res;
    } else {
        return null;
    }
}

sqInRect(20, 14)