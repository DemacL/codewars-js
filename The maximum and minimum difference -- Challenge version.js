function maxAndMin(arr1, arr2) {
    max1 = Math.max(...arr1);
    min1 = Math.min(...arr1);
    max2 = Math.max(...arr2);
    min2 = Math.min(...arr2);
    arr1.sort((x, y) => x - y)
    arr2.sort((x, y) => x - y)
    let i = 0; j = 0;
    let min = Infinity;
    while (i < arr1.length && j < arr2.length) {
        min = Math.min(min, Math.abs(arr1[i] - arr2[j]))
        console.log(min);
        if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
        if (min === 0) {
            break;
        }
    }
    return [Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1)), min]
}