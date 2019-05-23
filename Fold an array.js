function foldArray(array, runs) {
    let res = [...array];
    let result = [];
    while (runs--) {
        let left = 0;
        let right = res.length - 1;
        while (left <= right) {
            if (left === right) {
                result.push(res[left])
            } else {
                result.push(res[left] + res[right])
            }
            left++;
            right--;
        }
        res = [...result];
        result = []
    }
    return res;
}