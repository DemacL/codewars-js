function solve(arr, n) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'D') {
            let start = i - n;
            let end = i + n;
            for (let j = start; j <= end; j++) {
                if (arr[j] === 'C' && !obj[j]) {
                    obj[j] = true;
                    break;
                }
            }
        }
    }
    return Object.keys(obj).length
}