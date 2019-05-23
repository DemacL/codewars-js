function deepCount(a) {
    let sum = 0;
    function getCount(arr) {
        for (let i = 0; i < arr.length; i++) {
            sum++;
            if (Array.isArray(arr[i])) {
                getCount((arr[i]));
            }
        }
        return sum
    }

    return getCount(a);
}