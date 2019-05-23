function firstNSmallest(array, n) {
    return array.slice(n).reduce((arr, num) => {
        const max = Math.max(...arr);
        if (num < max) {
            const maxIndex = arr.lastIndexOf(max);
            arr.splice(maxIndex, 1);
            arr.push(num);
        }
        return arr;
    }, array.slice(0, n))
}


console.log(firstNSmallest([-8, 9, 3, -4, 0, -8, 7, -4, 2, 4, -5, -10, -4, 10, -7, -7, 7, 2, -5, 0, -10, 10, -1, 6, 4, 7, 10, -8, -5, -1, -5, -3, -9], 17));

// It should work for random inputs too - Expected: '[-8, -4, -8, -4, -5, -10, -4, -7, -7, -5, -10, -1, -8, -5, -5, -3, -9]',
//  instead got:                                    '[-8, -4, -8, -4, -5, -10, -4, -7, -7, -5, -10, -8, -5, -1, -5, -3, -9]'