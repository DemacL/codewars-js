longestPalindrome = function (s) {
    console.log(s);
    let longest = 1;
    let currentlongest = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {

            const cstr = s.slice(j, i + 1);
            console.log(s, cstr);
            let start = 0;
            let end = cstr.length - 1;
            let isPalindrome = true
            while (k <= end) {
                if (cstr[start++] !== cstr[end--]) {
                    isPalindrome = false;
                }
            }
            if (isPalindrome) {
                currentlongest = i + 1 - j;
                break;
            }
        }
        longest = Math.max(longest, currentlongest)
    }
    return longest;
}

longestPalindrome("baa")

var maxSequence = function (arr) {
    let maxSum = 0;
    let currentMaxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
        maxSum = Math.max(maxSum, currentMaxSum)
    }
    return maxSum;
}