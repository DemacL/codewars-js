function maxContiguousSum(arr) {
    let maxSum = 0;
    let currentMaxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMaxSum = Math.max(currentMaxSum, currentMaxSum + arr[i])
        maxSum = Math.max(maxSum, currentMaxSum)
    }
    return maxSum;
}


// function findSum(...args) {
//     if (args.length === 0) return 0;
//     if (args.some(x => x < 0)) return -1;
//     return args.reduce((sum, x) => sum + x)
// }